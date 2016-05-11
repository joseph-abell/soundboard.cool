import { connect } from 'react-redux'
import SlackMainContent from '../Components/SlackMainContent'

const mapStateToProps = (state) => {
	return {
		slackMainContent: state.slackMainContent.slackMainContent,
		slackContentType: state.slackMainContent.slackContentType
	}
}

const mapDispatchToProps = (dispatch) => {
	return { 

	}
}

const SlackMainContentContainer = connect(mapStateToProps, mapDispatchToProps)(SlackMainContent)

export default SlackMainContentContainer