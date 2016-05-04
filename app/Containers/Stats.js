import { connect } from 'react-redux'
import Stats from '../Components/Stats'

const mapStateToProps = (state) => {
	return {
		globalCounter: state.globalCounter,
		personalCounter: state.personalCounter,
		bearsKilled: state.bearsKilled,
		baboos: state.baboos,
		wizards: state.wizards
	}
}

const StatsContainer = connect(mapStateToProps)(Stats);

export default StatsContainer