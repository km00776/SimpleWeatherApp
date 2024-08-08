import NetInfo from '@react-native-community/netinfo';
import {ApiPresets as app} from './presets';

const DEFAULT_TIMEOUT = 30000;

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};

interface TimeoutResponse {
  status: number;
}

interface ApiSuccessResponse {
  success: true;
  httpCode: number;
  content: any; // You can further define this type based on the API response structure
}

interface ApiErrorResponse {
  success: false;
  httpCode: number | undefined;
  handledError: boolean;
  error: any; // You can further define this type based on the possible error structure
}

type ApiFetchResponse = ApiSuccessResponse | ApiErrorResponse;

const testConnection = async () => {
  try {
    let internetConnectionState = await NetInfo.fetch();
    if (internetConnectionState) {
      return true;
    } else {
      throw `NetInfoStatus: ${JSON.stringify(internetConnectionState)}`;
    }
  } catch (error) {
    return false;
  }
};

function isFetchResponse(
  response: TimeoutResponse | Response,
): response is Response {
  return (response as Response).json !== undefined;
}

const fetchTimeout = async (
  url: string,
  body: RequestInit,
  timeoutLength = DEFAULT_TIMEOUT,
) => {
  return Promise.race([
    fetch(url, body),
    new Promise<TimeoutResponse>(resolve => {
      setTimeout(resolve, timeoutLength, {status: 604});
    }),
  ]);
};

const isStatusOk = (httpCode: number) => {
  return httpCode === 200;
};

const handleError = (
  httpCode: number | null = null,
  errors = null,
): ApiErrorResponse => {
  const errorCodes = app.getErrorCodes();
  let handled = false;

  switch (httpCode) {
    case errorCodes.userError:
    case errorCodes.appTimeout:
      break;
    case errorCodes.tokenFail:
      handled = false;
      break;
    case errorCodes.noConnection:
      handled = true;
      break;
    default:
      handled = true;
      break;
  }
  return {
    success: false,
    httpCode: httpCode ?? undefined,
    handledError: handled,
    error: errors,
  };
};

const headers = () => {
  return {
    ...DEFAULT_HEADERS,
  };
};

const apiFetch = async (
  fullUrl: string,
  method: string,
  body: any = null,
): Promise<ApiFetchResponse> => {
  let httpCode: number | null = null;

  try {
    const isConnected = await testConnection();
    if (isConnected) {
      const response = await fetchTimeout(fullUrl, {
        method: method,
        headers: headers(),
        body: body ? JSON.stringify(body) : null,
      });

      if (isFetchResponse(response)) {
        httpCode = response.status;
        const result = await response.json();

        if (isStatusOk(httpCode)) {
          return {
            success: true,
            httpCode: httpCode,
            content: result,
          };
        } else {
          throw result;
        }
      } else {
        // Handle TimeoutResponse
        httpCode = response.status;
        throw 'Request timed out';
      }
    } else {
      httpCode = null;
      throw 'No internet connection';
    }
  } catch (error: any) {
    return handleError(httpCode, error);
  }
};

export const get = async (url: string): Promise<ApiFetchResponse> => {
  return await apiFetch(url, 'GET', null);
};
