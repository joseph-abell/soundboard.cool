import { connect } from 'react-redux'
import Stats from '../Components/Stats'
import { showStats } from '../Actions'

const mapStateToProps = (state) => {
	return {
		globalCounter: state.globalCounter,
		personalCounter: state.personalCounter,
		bearsKilled: state.bearsKilled,
		baboos: state.baboos,
		wizards: state.wizards,
		showStats: state.showStats
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onStatsClick: (stats) => {
			dispatch(showStats(!stats))
		}
	}
}

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default StatsContainer