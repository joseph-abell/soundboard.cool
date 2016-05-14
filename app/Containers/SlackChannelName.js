import { connect } from 'react-redux'
import SlackChannelName from '../Components/SlackChannelName'
import { slackMainContent } from '../Actions'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChannelNameClick: (channelName) => {
			switch(channelName) {
				case('general'):
					dispatch(slackMainContent(channelName, 'channel'))
					break;
				case('random'):
					dispatch(slackMainContent(channelName, 'channel'))
					break;
			}
			
		}
	}
}

const SlackChannelNameContainer = connect(mapStateToProps, mapDispatchToProps)(SlackChannelName)

export default SlackChannelNameContainer