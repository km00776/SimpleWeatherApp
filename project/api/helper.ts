import NetInfo from '@react-native-community/netinfo';
import {ApiPresets as app} from './presets';

const DEFAULT_TIMEOUT = 30000;

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};
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

const fetchTimeout = async (url, body, timeoutLength = DEFAULT_TIMEOUT) => {
  return Promise.race([
    fetch(url, body),
    new Promise(resolve => {
      setTimeout(resolve, timeoutLength, {status: 604});
    }),
  ]);
};

const isStatusOk = (httpCode: number) => {
  return httpCode === 200;
};

export const handleError = (
  httpCode: undefined | number = undefined,
  errors = null,
) => {
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
    httpCode: httpCode,
    handledError: handled,
    errors: errors,
  };
};

const headers = () => {
  return {
    ...DEFAULT_HEADERS,
    Authorization: process.env.ACCESS_KEY,
  };
};

const apiFetch = async (fullUrl: any, method: string, body = null) => {
  let httpCode = null;

  try {
    let isConnected = await testConnection();
    if (isConnected) {
      const response = await fetchTimeout(fullUrl, {
        method: method,
        headers: headers(),
        body: body,
      });
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
      httpCode = undefined;
      throw 'No internet connection';
    }
  } catch (error: any) {
    return handleError(httpCode, error);
  }
};

export const get = async (url: string) => {
  return await apiFetch(app.getURL() + url, 'GET', null);
};
