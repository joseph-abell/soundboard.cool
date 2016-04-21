import { connect } from 'react-redux'
import Letter from '../Components/Letter'
import { soundManager } from 'soundmanager2'
import { soundboard, togglePlaying, animation } from '../Actions'
import Data from '../data'


const mapStateToProps = (state) => {
	return {
		soundboard: state.soundboard,
		isPlaying: state.togglePlaying.isPlaying,
		killBearButton: state.killBearButton
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLetterClick: (foundKey, soundboardName, isPlaying) => {
			if (isPlaying === true) {
				return;
			}

			dispatch(togglePlaying(true, foundKey.audioTitle))

			if (foundKey.animation) {
				dispatch(animation(foundKey.animation))
			}

			
			foundKey.rules(foundKey, dispatch);
		}
	}
}

const LetterContainer = connect(mapStateToProps, mapDispatchToProps)(Letter)

export default LetterContainer