import { api } from "../../../api";
import { currentWeatherURL } from "../../../api/urls";
export const getCurrentWeather = async () => {
    const result = await api.get(currentWeatherURL("New York"))
    console.log('result', result);
    return true;
}


