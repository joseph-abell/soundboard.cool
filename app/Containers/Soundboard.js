import { connect } from 'react-redux'
import Soundboard from '../Components/Soundboard'
import { soundboard, enableCheatMenu } from '../Actions'

const mapStateToProps = (state) => {
	return {
		showInstructions: state.toggleInstructions,
		soundboard: state.soundboard,
		keyTitle: state.togglePlaying.title,
		killBearButton: state.toggleKillBearVisible.killBearButton
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onCheatMenuButtonClick: (cheatMenu) => {
			dispatch(enableCheatMenu(!cheatMenu))
		}
	}
}

const SoundboardContainer = connect(mapStateToProps, mapDispatchToProps)(Soundboard);

export default SoundboardContainer