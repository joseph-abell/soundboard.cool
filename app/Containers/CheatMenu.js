import { connect } from 'react-redux'
import CheatMenu from '../Components/CheatMenu'
import { enableCheatMenu } from '../Actions'

const mapStateToProps = (state) => {
	return {
		cheatMenu: state.cheatMenu
	}
}

const CheatMenuContainer = connect(mapStateToProps)(CheatMenu)

export default CheatMenuContainer