import React, { Component } from 'react';
import SearchBar from './search_bar'
import WeatherList from './weather_list'

export default class Home extends Component {
	render() {
		return (
			<div>
			Hi Támara!
				<SearchBar />
				<WeatherList />
			</div>
			)
	}
}