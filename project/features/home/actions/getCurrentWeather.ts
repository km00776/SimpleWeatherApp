import {api} from '../../../api';
import {weatherURL} from '../../../api/urls';
import { ApiResponse, WeatherDay, ApiContent } from './types';

export const fetchWeatherData = async (query: string) => {
  const result = await api.get(weatherURL(query));

  if (result.success) {
    const formattedData = JSON.stringify(result.content as ApiContent);
    return formattedData;
  }
  return false;
};
