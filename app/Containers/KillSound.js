import { connect } from 'react-redux'
import KillSound from '../Components/KillSound'
import { toggleKillBearVisible, bearsKilled } from '../Actions'
import { soundManager2 } from '../data'

const mapStateToProps = (state) => {
	return {
		buttonState: state.toggleKillBearVisible.killBearButton
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonClick: () => {
			soundManager2.stopAll();
		}
	}
}

const KillSoundContainer = connect(mapStateToProps, mapDispatchToProps)(KillSound);

export default KillSoundContainer