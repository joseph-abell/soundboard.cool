import { connect } from 'react-redux'
import NumberKey from '../Components/Number'
import { soundboard } from '../Actions'
import data from '../data'

const mapStateToProps = (state) => {
	return {
		soundboard: state.soundboard,
		isPlaying: state.togglePlaying.isPlaying,
		killBearButton: state.toggleKillBearVisible.killBearButton,
		cheatMenu: state.cheatMenu
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNumberKeyPress: (number, cheatMenu) => {
			if (cheatMenu === true) {
				return false;
			}

			for (let dataId = 0; dataId < data.numbers.length; dataId++) {
				if (parseInt(number) == data.numbers[dataId].id) {
					dispatch(soundboard(data.numbers[dataId].title || "Chris Remo"))
				}
			}
			return false;
		}
	}
}

const NumberKeyContainer = connect(mapStateToProps, mapDispatchToProps)(NumberKey);

export default NumberKeyContainer