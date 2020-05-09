import {SET_SCREEN} from '../actionTypes'

const initialState = "1"

const screen = (state = initialState, action) => {
    switch (action.type){
    case SET_SCREEN:
        return action.payload.screenKey    
    default: 
        return state
    }
}

export default screen; 