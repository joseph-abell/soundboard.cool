import React from 'react'

export default class App extends React.Component {
  render() {
    let { slackContentName, onlineStyling, onlineText } = this.props;

    return (
      <div style={{textAlign: 'left'}}>
        <div style={{fontSize: 18, fontWeight: 'bold'}}>{slackContentName}</div>
        <div>
          <div style={onlineStyling}></div>
          <div style={{float: 'left', fontSize: 11, opacity: 0.3, lineHeight: '22px'}}>{onlineText}</div>
          <div style={{float: 'left', fontSize: 11, opacity: 0.3, padding: '0 5px', lineHeight: '22px'}}>|</div>
          <div style={{float: 'left', fontSize: 11, opacity: 0.3, lineHeight: '22px'}}>@{slackContentName}</div>
          <div style={{clear: 'both'}}></div>
        </div>
      </div>  
    )
  }
}