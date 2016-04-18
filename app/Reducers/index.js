import { combineReducers } from 'redux'

import {
	SOUNDBOARD,
	TOGGLE_PLAYING,
	TOGGLE_INSTRUCTIONS
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

const soundboardApp = combineReducers(
	{
		soundboard, 
		togglePlaying,
		toggleInstructions
	}
)

export default soundboardApp