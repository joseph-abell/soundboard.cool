import { connect } from 'react-redux'
import Soundboard from '../Components/Soundboard'
import { soundboard } from '../Actions'

const mapStateToProps = (state) => {
	return {
		showInstructions: state.toggleInstructions,
		soundboard: state.soundboard
	}
}

const SoundboardContainer = connect(mapStateToProps)(Soundboard);

export default SoundboardContainer