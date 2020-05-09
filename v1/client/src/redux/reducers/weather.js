import { 
    FETCH_WEATHER_FAILURE, 
    FETCH_WEATHER_REQUEST, 
    FETCH_WEATHER_SUCCESS,
    SET_WEATHER,
    INVALIDATE_WEATHER
    } 
    from '../actionTypes';

function selectedWeather(state = 'weather', action){
    switch(action.type){
        case SET_WEATHER:
            return action.weather

        default:
            return state
    }

}

function post(
    state = {
        isFetching: false, 
        didInvalidate: false, 
        items: []
    },
    action
){
    switch(action.type){
        case INVALIDATE_WEATHER:
            return Object.assign({}, state, {
                didInvalidate: true
            })

        case FETCH_WEATHER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case FETCH_WEATHER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }) 

        default: 
            return state
    }
}