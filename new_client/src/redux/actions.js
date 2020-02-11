import { SET_SCREEN } from './actionTypes'

export const setScreen = screen => ({
    type: SET_SCREEN,
    payload:{
        screen
    }
})