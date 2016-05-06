import { connect } from 'react-redux'
import KillButton from '../Components/KillButton'
import { toggleKillBearVisible, bearsKilled } from '../Actions'
import Firebase from 'firebase'

let fireRef = new Firebase('https://soundboardcool.firebaseio.com/')

const mapStateToProps = (state) => {
	return {
		killBearButton: state.toggleKillBearVisible.killBearButton,
		soundManager: state.toggleKillBearVisible.soundManager,
		bearsKilled: state.bearsKilled
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onKillBearClick: (soundManager, bears) => {
			soundManager.stopAll();
			fireRef.update({'bearsKilled': ++bears})
		}
	}
}


const KillButtonContainer = connect(mapStateToProps, mapDispatchToProps)(KillButton);

export default KillButtonContainer