import { connect } from 'react-redux'
import Letter from '../Components/Letter'
import { soundManager } from 'soundmanager2'
import { soundboard, togglePlaying } from '../Actions'
import Data from '../data'


const mapStateToProps = (state) => {
	return {
		soundboard: state.soundboard,
		isPlaying: state.togglePlaying,
		killBearButton: state.killBearButton
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLetterClick: (foundKey, soundboardName, isPlaying) => {
			if (isPlaying === true) {
				return;
			}

			dispatch(togglePlaying(true))

			if (foundKey.specialRules) {
				foundKey.specialRules(foundKey.urls, dispatch);
			} else {
				const mySound = soundManager.createSound({
					url: foundKey.urls[0],
					autoPlay: true,
					onfinish: () => {
						dispatch(togglePlaying(false))
					}
				});	
			}

			
		}
	}
}

const LetterContainer = connect(mapStateToProps, mapDispatchToProps)(Letter)

export default LetterContainer