export const weatherURL = (query: string) =>
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=${process.env.ACCESS_KEY}&contentType=json`;
