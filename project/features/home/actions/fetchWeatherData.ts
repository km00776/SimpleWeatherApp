import {api} from '../../../api';
import {weatherURL} from '../../../api/urls';
import {WeatherData} from './types';

export const fetchWeatherData = async (query: string) => {
  const result = await api.get(weatherURL(query));
  if (result.success) {
    const formattedData: WeatherData = result.content;
    return formattedData;
  }
  return false;
};
