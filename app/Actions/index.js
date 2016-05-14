export const USER_ID = "USER_ID"

export function userId (userId) {
	return {
		type: USER_ID,
		userId: userId
	}
}

export const SOUNDBOARD = "SOUNDBOARD"

export function soundboard (title) {
	return {
		type: SOUNDBOARD,
		title: title
	}
}

export const TOGGLE_PLAYING = "TOGGLE_PLAYING"

export function togglePlaying (title) {
	return {
		type: TOGGLE_PLAYING,
		title: title
	}
}

export const TOGGLE_INSTRUCTIONS = "TOGGLE_INSTRUCTIONS"

export function toggleInstructions (instructions) {
	return {
		type: TOGGLE_INSTRUCTIONS,
		instructions: instructions
	}
}

export const TOGGLE_KILL_BEAR_VISIBLE = "TOGGLE_KILL_BEAR_VISIBLE"

export function toggleKillBearVisible (killBearButton, soundManager) {
	return {
		type: TOGGLE_KILL_BEAR_VISIBLE,
		killBearButton: killBearButton,
		soundManager: soundManager
	}
}

export const ANIMATION = "ANIMATION"

export function animation (animation) {
	return {
		type: ANIMATION,
		animation: animation
	}
}

export const CAN_ANIMATE = "CAN_ANIMATE"

export function canAnimate (canAnimate) {
	return {
		type: CAN_ANIMATE,
		canAnimate: canAnimate
	}
}

export const PERSONAL_COUNTER = "PERSONAL_COUNTER"

export function personalCounter (personalCounter) {
	return {
		type: PERSONAL_COUNTER,
		personalCounter: personalCounter
	}
}

export const GLOBAL_COUNTER = "GLOBAL_COUNTER"

export function globalCounter (globalCounter) {
	return {
		type: GLOBAL_COUNTER,
		globalCounter: globalCounter
	}
}

export const BEARS_KILLED = "BEARS_KILLED"

export function bearsKilled (bearsKilled) {
	return {
		type: BEARS_KILLED,
		bearsKilled: bearsKilled
	}
}

export const BABOOS = "BABOOS"

export function baboos (baboos) {
	return {
		type: BABOOS,
		baboos: baboos
	}
}

export const WIZARDS = "WIZARDS"

export function wizards (wizards) {
	return {
		type: WIZARDS,
		wizards: wizards
	}
}

export const NEO = "NEO"

export function neo (neo) {
	return {
		type: NEO,
		neo: neo
	}
}

export const SHOW_STATS = "SHOW_STATS"

export function showStats (showStats) {
	return {
		type: SHOW_STATS,
		showStats: showStats
	}
}

export const ENABLE_CHEAT_MENU = "ENABLE_CHEAT_MENU"

export function enableCheatMenu (cheatMenu) {
	return {
		type: ENABLE_CHEAT_MENU,
		cheatMenu: cheatMenu
	}
}

export const ADD_LUIGI_MESSAGE = "ADD_LUIGI_MESSAGE"

export function addLuigiMessage (time, person, says) {
	return {
		type: ADD_LUIGI_MESSAGE,
		luigiMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const ADD_SLACKBOT_MESSAGE = "ADD_SLACKBOT_MESSAGE"

export function addSlackbotMessage (time, person, says) {
	return {
		type: ADD_SLACKBOT_MESSAGE,
		slackbotMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const ADD_BOWSER_MESSAGE = "ADD_BOWSER_MESSAGE"

export function addBowserMessage (time, person, says) {
	return {
		type: ADD_BOWSER_MESSAGE,
		bowserMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const ADD_MARIO_MESSAGE = "ADD_MARIO_MESSAGE"

export function addMarioMessage (time, person, says) {
	return {
		type: ADD_MARIO_MESSAGE,
		marioMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const ADD_PEACH_MESSAGE = "ADD_PEACH_MESSAGE"

export function addPeachMessage (time, person, says) {
	return {
		type: ADD_PEACH_MESSAGE,
		peachMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const ADD_TOAD_MESSAGE = "ADD_TOAD_MESSAGE"

export function addToadMessage (time, person, says) {
	return {
		type: ADD_TOAD_MESSAGE,
		toadMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const ADD_YOSHI_MESSAGE = "ADD_YOSHI_MESSAGE"

export function addYoshiMessage (time, person, says) {
	return {
		type: ADD_YOSHI_MESSAGE,
		yoshiMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const ADD_GENERAL_CHANNEL_MESSAGE = "ADD_GENERAL_CHANNEL_MESSAGE"

export function addGeneralChannelMessage (time, person, says) {
	return {
		type: ADD_GENERAL_CHANNEL_MESSAGE,
		generalChannelMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const ADD_RANDOM_CHANNEL_MESSAGE = "ADD_RANDOM_CHANNEL_MESSAGE"

export function addRandomChannelMessage (time, person, says) {
	return {
		type: ADD_RANDOM_CHANNEL_MESSAGE,
		randomChannelMessage: {
			time: time,
			person: person,
			says: says
		}
	}
}

export const SLACK_MAIN_CONTENT = "SLACK_MAIN_CONTENT"

export function slackMainContent (slackContentName, slackContentType, slackIsOnline = false) {
	return {
		type: SLACK_MAIN_CONTENT,
		slackContentName: slackContentName,
		slackContentType: slackContentType,
		slackIsOnline: slackIsOnline
	}
}