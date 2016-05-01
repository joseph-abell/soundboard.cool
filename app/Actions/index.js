export const SOUNDBOARD = "SOUNDBOARD"

export function soundboard (title) {
	return {
		type: SOUNDBOARD,
		title: title
	}
}

export const TOGGLE_PLAYING = "TOGGLE_PLAYING"

export function togglePlaying (isPlaying, title) {
	return {
		type: TOGGLE_PLAYING,
		isPlaying: isPlaying,
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

export const INCREMENT_PERSONAL_COUNTER = "INCREMENT_PERSONAL_COUNTER"

export function incrementPersonalCounter () {
	return {
		type: INCREMENT_PERSONAL_COUNTER
	}
}