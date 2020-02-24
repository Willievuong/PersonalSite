import { SET_SCREEN, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from './actionTypes'
import {INVALIDATE_WEATHER} from './actionTypes'
import axios from 'axios'

export const setScreen = key => ({
    type: SET_SCREEN,
    payload:{
        screenKey: key
    }
})

export const invalidateWeather = (weather) => {
    return {
        type: INVALIDATE_WEATHER, 
        weather 
    }
}

export const requestWeather = (weather) => {
    return {
        type: FETCH_WEATHER_REQUEST,
        weather
    }
}

export const receiveWeather = (weather, json) => {
    return {
        type: FETCH_WEATHER_SUCCESS, 
        weather, 
        data: json['properties']['periods'][0],
        receivedAt: Date.now()
    }
}

export const fetchWeather = (weather) => {

    return async function (dispatch){
        
        dispatch(requestWeather(weather))
        
        let response
        try{    
            response = await axios.get("https://api.weather.gov/gridpoints/SGX/54,21/forecast/hourly")
        }catch(error){
            console.error(error)
        } 

        let data = response.data
        dispatch(receiveWeather(weather, data))
    }

} 