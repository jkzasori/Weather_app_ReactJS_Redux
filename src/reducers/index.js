import {combineReducers} from 'redux';
import WeatherReducer from './reducers_weather';

const rootReducer = combineReducers({
	//state: (state = {}) => state lo que está inicialmente
	weather: WeatherReducer

})

export default rootReducer;