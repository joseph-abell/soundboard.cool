import React from 'react'

export default class App extends React.Component {
  render() {
    let { channelName } = this.props;

    return (
      <div style={{textAlign: 'left'}}>
        <div style={{fontSize: 18, fontWeight: 'bold'}}>#{channelName}</div>
        <div style={{float: 'left', fontSize: 11, opacity: 0.3, lineHeight: '22px'}}>6 members</div>
      </div>  
    )
  }
}