import { connect } from 'react-redux'
import AnimationElements from '../Components/AnimationElements'

const mapStateToProps = (state) => {
	return {
		animation: state.animation
	}
}

const AnimationElementsContainer = connect(mapStateToProps)(AnimationElements)

export default AnimationElementsContainer