export interface TimeoutResponse {
  status: number;
}

export interface ApiSuccessResponse {
  success: true;
  httpCode: number;
  content: any; // You can further define this type based on the API response structure
}

export interface ApiErrorResponse {
  success: false;
  httpCode: number | undefined;
  handledError: boolean;
  error: any; // You can further define this type based on the possible error structure
}

export type ApiFetchResponse = ApiSuccessResponse | ApiErrorResponse;
