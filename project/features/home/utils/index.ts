import {CurrentConditions} from '../../../api/types';

type WeatherConfig = {
  condition: Object;
};

export const determineWeatherType = (
  object: any,
  currentConditions: CurrentConditions,
): WeatherConfig => {
  const cloudCoverThreshold = 60;
  const sunnyThreshold = 20;
  const rainyThreshold = 50;
  const freezingTemp = 0;
  let condition;

  if (currentConditions) {
    if (
      currentConditions.precipprob > rainyThreshold &&
      currentConditions.preciptype &&
      currentConditions.preciptype.includes('rain')
    ) {
      condition = object.Rainy;
    } else if (
      currentConditions.precipprob > rainyThreshold &&
      currentConditions.preciptype &&
      currentConditions.preciptype.includes('snow') &&
      currentConditions.feelslike <= freezingTemp
    ) {
      condition = object.Snowy;
    } else if (currentConditions.cloudcover > cloudCoverThreshold) {
      condition = object.Cloudy;
    } else if (
      currentConditions.cloudcover < sunnyThreshold &&
      currentConditions.conditions === 'Clear'
    ) {
      condition = object.Sunny;
    } else {
      condition = object.Cloudy;
    }
  }
  return condition;
};
