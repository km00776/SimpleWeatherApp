interface CurrentConditions {
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
  preciptype: null | string;
  pressure: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  stations: string[];
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
  // Add other relevant fields for current conditions
}

interface SuccessResponse {
  content: {
    address: string;
    alerts: any[];
    currentConditions: CurrentConditions;
    days: number[];
    description: string;
    latitude: number;
    longitude: number;
    queryCost: number;
    resolvedAddress: string;
    stations: {[key: string]: any};
    timezone: string;
    tzoffset: number;
  };
  httpCode: number;
  success: boolean;
}

export interface WeatherData {
  address: string;
  alerts: any[];
  currentConditions: CurrentConditions;
  days: any[];
  description: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  stations: {[key: string]: any};
  timezone: string;
  tzoffset: number;
}

export interface ErrorResponse {
  success: false;
  httpCode: number | undefined;
  handledError: boolean;
  errors: null;
}
export type ApiResponse = SuccessResponse | ErrorResponse;
