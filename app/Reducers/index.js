import { combineReducers } from 'redux'

import {
	SOUNDBOARD,
	TOGGLE_PLAYING,
	TOGGLE_INSTRUCTIONS,
	TOGGLE_KILL_BEAR_VISIBLE,
	KILL_BEAR,
	ANIMATION,
	INCREMENT_PERSONAL_COUNTER
} from '../Actions'

const soundboard = ( state = 'Chris Remo', action) => {
	switch (action.type) {
		case (SOUNDBOARD):
			return action.title;
		default:
			return state;
	}
}

const togglePlaying = ( state = { isPlaying: false, title: ''}, action) => {
	switch (action.type) {
		case (TOGGLE_PLAYING):
			return {
				isPlaying: action.isPlaying,
				title: action.title
			}
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

const animation = ( state = '', action) => {
	switch (action.type) {
		case (ANIMATION):
			return action.animation
		default:
			return state
	}
}

const incrementPersonalCounter = ( state = 0, action) => {
	switch(action.type) {
		case (INCREMENT_PERSONAL_COUNTER):
			return action.incrementPersoanlCounter
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
		killBear,
		animation
	}
)

export default soundboardApp