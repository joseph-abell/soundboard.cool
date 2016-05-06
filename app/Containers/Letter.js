import { connect } from 'react-redux'
import Letter from '../Components/Letter'
import { soundManager } from 'soundmanager2'
import { soundboard, togglePlaying, animation, personalCounter } from '../Actions'
import Data from '../data'
import Firebase from 'firebase'

let fireRef = new Firebase('https://soundboardcool.firebaseio.com/')

const mapStateToProps = (state) => {
	return {
		soundboard: state.soundboard,
		canAnimate: state.canAnimate,
		killBearButton: state.toggleKillBearVisible.killBearButton,
		globalCounter: state.globalCounter,
		personalCounter: state.personalCounter,
		baboos: state.baboos,
		wizards: state.wizards
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLetterClick: (foundKey, soundboardName, globalCounter, personalCount, canAnimate, baboos, wizards) => {
			fireRef.update({'globalCounter': ++globalCounter})
			dispatch(personalCounter(++personalCount))

			if (foundKey.animation) {
				dispatch(animation(foundKey.animation))
			}

			foundKey.rules(foundKey, dispatch, [baboos, wizards, canAnimate]);
		}
	}
}

const LetterContainer = connect(mapStateToProps, mapDispatchToProps)(Letter)

export default LetterContainer