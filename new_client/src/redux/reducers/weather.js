import { FETCH_WEATHER_SUCCESS } from '../actionTypes'

const initialState = {
    weather: "No Weather Data"
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_WEATHER_SUCCESS:
            const { weather } = action
            return {
                ...state,
                weather: weather
            }

        default:
            return {...state};
    }
}