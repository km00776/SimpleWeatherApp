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

export interface CurrentConditions {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  dew: number;
  feelslike: number;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipprob: number;
  preciptype: any;
  pressure: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
}

export type ApiFetchResponse = ApiSuccessResponse | ApiErrorResponse;
