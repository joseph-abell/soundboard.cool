import { connect } from 'react-redux'
import SlackPersonalMessageName from '../Components/SlackPersonalMessageName'
import { slackMainContent } from '../Actions'

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onPersonalMessageClick: (personalMessageName) => {
			dispatch(slackMainContent(personalMessageName, 'personalMessage'))
		}
	}
}
const SlackPersonalMessageNameContainer = connect(mapStateToProps, mapDispatchToProps)(SlackPersonalMessageName)

export default SlackPersonalMessageNameContainer