import { connect } from 'react-redux'
import Letter from '../Components/Letter'
import { soundManager } from 'soundmanager2'
import { soundboard, togglePlaying } from '../Actions'
import Data from '../data'


const mapStateToProps = (state) => {
	return {
		soundboard: state.soundboard,
		isPlaying: state.togglePlaying
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLetterClick: (letter, soundboardName, isPlaying) => {
			if (isPlaying === true) {
				return;
			}

			dispatch(togglePlaying(true))

			if (letter === 'b' && soundboardName === 'Nick Breckon') {
				let mySound = soundManager.createSound({
					url: Data[soundboardName][letter][0].url,
					autoPlay: true,
					onfinish: () => {
						mySound = soundManager.createSound({
							url: Data[soundboardName][letter][1].url,
							autoPlay: true,
							onfinish: () => {
								mySound.play()
							}
						})
					}
				})
			} else {
				const mySound = soundManager.createSound({
					url: Data[soundboardName][letter][0].url,
					autoPlay: true,
					onfinish: () => {
						dispatch(togglePlaying(false))
					}
				})	
			}
		}
	}
}

const LetterContainer = connect(mapStateToProps, mapDispatchToProps)(Letter)

export default LetterContainer