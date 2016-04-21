import { combineReducers } from 'redux'

import {
	SOUNDBOARD,
	TOGGLE_PLAYING,
	TOGGLE_INSTRUCTIONS,
	TOGGLE_KILL_BEAR_VISIBLE,
	KILL_BEAR
} from '../Actions'

const soundboard = ( state = 'Songs and Stings', action) => {
	switch (action.type) {
		case (SOUNDBOARD):
			return action.title;
		default:
			return state;
	}
}

const togglePlaying = ( state = false, action) => {
	switch (action.type) {
		case (TOGGLE_PLAYING):
			return action.isPlaying
		default:
			return state
	}
}

const toggleInstructions = ( state = true, action) => {
	switch (action.type) {
		case (TOGGLE_INSTRUCTIONS):
			return action.instructions
		default:
			return state
	}
}

const toggleKillBearVisible = ( state = {
	killBearButton: false,
	soundManager: {}
}, action) => {
	switch (action.type) {
		case (TOGGLE_KILL_BEAR_VISIBLE):
			return {
				killBearButton: action.killBearButton,
				soundManager: action.soundManager
			}
		default:
			return state
	}
}

const killBear = ( state = {
	killBear: false, 
}, action) => {
	switch (action.type) {
		case (KILL_BEAR):
			return {
				killBear: action.killBear
			}
		default:
			return state
	}
}

const soundboardApp = combineReducers(
	{
		soundboard, 
		togglePlaying,
		toggleInstructions,
		toggleKillBearVisible,
		killBear
	}
)

export default soundboardApp