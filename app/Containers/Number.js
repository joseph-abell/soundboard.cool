import { connect } from 'react-redux'
import NumberKey from '../Components/Number'
import { soundboard } from '../Actions'

const mapStateToProps = (state) => {
	return {
		soundboard: state.soundboard,
		isPlaying: state.togglePlaying
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNumberKeyPress: (title) => {
			switch (title) {
				case('1'):
					dispatch(soundboard('Songs and Stings'))
					break;
				case('2'):
					dispatch(soundboard('Nick Breckon'))
					break;
				case('3'):
					dispatch(soundboard('Chris Remo'))
					break;
			}
		}
	}
}

const NumberKeyContainer = connect(mapStateToProps, mapDispatchToProps)(NumberKey);

export default NumberKeyContainer