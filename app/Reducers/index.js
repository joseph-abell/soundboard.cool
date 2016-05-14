import { combineReducers } from 'redux'

import {
	USER_ID,
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
	ENABLE_CHEAT_MENU,
	SLACK_MAIN_CONTENT,
	ADD_LUIGI_MESSAGE,
	ADD_SLACKBOT_MESSAGE,
	ADD_BOWSER_MESSAGE,
	ADD_MARIO_MESSAGE,
	ADD_PEACH_MESSAGE,
	ADD_TOAD_MESSAGE,
	ADD_YOSHI_MESSAGE
} from '../Actions'

const userId = ( state = '', action) => {
	switch (action.type) {
		case (USER_ID):
			return action.userId;
		default:
			return state;
	}
}

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

const slackMainContent = (state = {
	slackContentName: 'slackbot',
	slackContentType: 'personalMessage',
	slackIsOnline: true
}, action) => {
	switch(action.type) {
		case(SLACK_MAIN_CONTENT):
			return {
				slackContentName: action.slackContentName,
				slackContentType: action.slackContentType,
				slackIsOnline: action.slackIsOnline
			}
		default:
			return state
	}
}

const addLuigiMessage = (state = [], action) => {
	switch (action.type) {
		case(ADD_LUIGI_MESSAGE):
			return [
				...state,
				{
					time: action.luigiMessage.time,
					person: action.luigiMessage.person,
					says: action.luigiMessage.says
				}
			]
		default:
			return state
	}
}

const addSlackbotMessage = (state = [], action) => {
	switch (action.type) {
		case(ADD_SLACKBOT_MESSAGE):
			return [
				...state,
				{
					time: action.slackbotMessage.time,
					person: action.slackbotMessage.person,
					says: action.slackbotMessage.says
				}
			]
		default:
			return state
	}
}

const addBowserMessage = (state = [], action) => {
	switch (action.type) {
		case(ADD_BOWSER_MESSAGE):
			return [
				...state,
				{
					time: action.bowserMessage.time,
					person: action.bowserMessage.person,
					says: action.bowserMessage.says
				}
			]
		default:
			return state
	}
}

const addMarioMessage = (state = [], action) => {
	switch (action.type) {
		case(ADD_MARIO_MESSAGE):
			return [
				...state,
				{
					time: action.marioMessage.time,
					person: action.marioMessage.person,
					says: action.marioMessage.says
				}
			]
		default:
			return state
	}
}

const addPeachMessage = (state = [], action) => {
	switch (action.type) {
		case(ADD_PEACH_MESSAGE):
			return [
				...state,
				{
					time: action.peachMessage.time,
					person: action.peachMessage.person,
					says: action.peachMessage.says
				}
			]
		default:
			return state
	}
}

const addToadMessage = (state = [], action) => {
	switch (action.type) {
		case(ADD_TOAD_MESSAGE):
			return [
				...state,
				{
					time: action.toadMessage.time,
					person: action.toadMessage.person,
					says: action.toadMessage.says
				}
			]
		default:
			return state
	}
}

const addYoshiMessage = (state = [], action) => {
	switch (action.type) {
		case(ADD_YOSHI_MESSAGE):
			return [
				...state,
				{
					time: action.yoshiMessage.time,
					person: action.yoshiMessage.person,
					says: action.yoshiMessage.says
				}
			]
		default:
			return state
	}
}

const soundboardApp = combineReducers(
	{
		userId,
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
		cheatMenu,
		slackMainContent,
		addLuigiMessage,
		addSlackbotMessage,
		addBowserMessage,
		addMarioMessage,
		addPeachMessage,
		addToadMessage,
		addYoshiMessage
	}
)

export default soundboardApp