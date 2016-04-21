import { connect } from 'react-redux'
import KillButton from '../Components/KillButton'
import { toggleKillBearVisible } from '../Actions'

const mapStateToProps = (state) => {
	return {
		killBearButton: state.toggleKillBearVisible.killBearButton,
		soundManager: state.toggleKillBearVisible.soundManager
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onKillBearClick: (soundManager) => {
			soundManager.stopAll();
			dispatch(toggleKillBearVisible(false, {}))
		}
	}
}


const KillButtonContainer = connect(mapStateToProps, mapDispatchToProps)(KillButton);

export default KillButtonContainer