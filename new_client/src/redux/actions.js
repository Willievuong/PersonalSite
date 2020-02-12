import { SET_SCREEN } from './actionTypes'

export const setScreen = key => ({
    type: SET_SCREEN,
    payload:{
        screenKey: key
    }
})