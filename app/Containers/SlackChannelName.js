import { connect } from 'react-redux'
import SlackChannelName from '../Components/SlackChannelName'
import { slackMainContent } from '../Actions'

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChannelNameClick: (channelName) => {
			dispatch(slackMainContent(channelName, 'channel'))
		}
	}
}

const SlackChannelNameContainer = connect(mapStateToProps, mapDispatchToProps)(SlackChannelName)

export default SlackChannelNameContainer