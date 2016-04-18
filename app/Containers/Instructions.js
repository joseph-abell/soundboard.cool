import { connect } from 'react-redux'
import Instructions from '../Components/Instructions'
import { toggleInstructions } from '../Actions'

const mapStateToProps = (state) => {
	return {
		showInstructions: state.toggleInstructions
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onCloseClick: () => {
			dispatch(toggleInstructions(false));
		}
	}
}

const InstructionsContainer = connect(mapStateToProps, mapDispatchToProps)(Instructions)

export default InstructionsContainer