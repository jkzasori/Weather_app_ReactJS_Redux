import axios from 'axios';


const API_KEY = '64d5cb069867d7b8b68bba9af60cf083';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},co`;
  const request = axios.get(url) //axios returns a promise, a promise is a data structure that doesn't contain yet any of our request data

  

  return {
    type: FETCH_WEATHER,
    payload: request //what redux-promise does is to unwrap the promise and send the actual data to the reducers.
  };
}