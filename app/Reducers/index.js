import { combineReducers } from 'redux'

import {
	SOUNDBOARD,
	TOGGLE_PLAYING,
	TOGGLE_INSTRUCTIONS,
	TOGGLE_KILL_BEAR_VISIBLE,
	KILL_BEAR,
	ANIMATION,
	CAN_ANIMATE,
	PERSONAL_COUNTER,
	GLOBAL_COUNTER,
	BEARS_KILLED,
	BABOOS,
	WIZARDS,
	NEO,
	SHOW_STATS,
	ENABLE_CHEAT_MENU
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
	killBearButton: 0,
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

const canAnimate = ( state = true, action) => {
	switch (action.type) {
		case (CAN_ANIMATE):
			return action.canAnimate
		default:
			return state
	}
}

const personalCounter = ( state = 0, action) => {
	switch(action.type) {
		case (PERSONAL_COUNTER):
			return action.personalCounter
		default:
			return state
	}
}

const globalCounter = ( state = 0, action) => {
	switch(action.type) {
		case (GLOBAL_COUNTER):
			return action.globalCounter
		default:
			return state
	}
}

const bearsKilled = ( state = 0, action) => {
	switch(action.type) {
		case (BEARS_KILLED):
			return action.bearsKilled
		default:
			return state
	}
}

const baboos = ( state = 0, action) => {
	switch(action.type) {
		case (BABOOS):
			return action.baboos
		default:
			return state
	}
}

const wizards = (state = 0, action) => {
	switch(action.type) {
		case(WIZARDS):
			return action.wizards
		default:
			return state
	}
}

const neo = (state = 0, action) => {
	switch(action.type) {
		case(NEO):
			return action.neo
		default:
			return state
	}
}

const showStats = (state = false, action) => {
	switch(action.type) {
		case(SHOW_STATS):
			return action.showStats
		default:
			return state
	}
}

const cheatMenu = (state = false, action) => {
	switch(action.type) {
		case(ENABLE_CHEAT_MENU):
			return action.cheatMenu
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
		animation,
		canAnimate,
		personalCounter,
		globalCounter,
		bearsKilled,
		baboos,
		wizards,
		neo,
		showStats,
		cheatMenu
	}
)

export default soundboardApp