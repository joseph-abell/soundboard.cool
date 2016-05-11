import React from 'react'

export default class App extends React.Component {
  render() {
    let { person, time, says } = this.props;

    return (
      <div style={{marginBottom: 10, position: 'relative'}}>
        <div style={{float: 'left', position: 'absolute', width: 36, height: 36, left: 0, background: '#333', borderRadius: 4, marginRight: 10}}></div>
        <div style={{float: 'left'}}>
          <div style={{ float: 'left', marginRight: 10, marginLeft: 46, fontSize: '15px'}}>{person}</div>
          <div style={{ float: 'left', fontSize: '12px', mlineHeight: '18px', color: '#ddd'}}>{time}</div>
          <div style={{ clear: 'both'}} />
          <div style={{ float: 'left', marginLeft: 46}}>{says}</div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}