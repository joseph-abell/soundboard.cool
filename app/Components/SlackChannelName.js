import React from 'react'

export default class App extends React.Component {
  render() {
    let { channelName, onChannelNameClick } = this.props;

    return (
      <div style={
        {
          padding: '0 5px', 
          lineHeight: '20px', 
          opacity: 0.7, 
          cursor: 'pointer'
        }
      } onClick={
        () => {
          onChannelNameClick(channelName);
        }
      }># {channelName}</div>
    );
  }
}