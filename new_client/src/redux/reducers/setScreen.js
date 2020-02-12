import { SET_SCREEN} from '../actionTypes'

const initialState = {
    screenKey: "1"
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_SCREEN:
            const { screenKey } = action.payload
            return {
                ...state,
                screenKey: screenKey
            }

        default:
            return {...state};
    }
}