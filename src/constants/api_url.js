const location = "Buenos Aires, ar";

const api_key = "f777032bfafe7e73f5f4d374915a7678";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
// const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
//const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;