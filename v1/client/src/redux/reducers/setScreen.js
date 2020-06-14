import { SET_SCREEN} from '../actionTypes'


export default function(state, action){
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