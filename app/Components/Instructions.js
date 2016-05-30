import React from 'react'

export default class App extends React.Component {
  render() {
  	const { onCloseClick, showInstructions } = this.props;

    if (showInstructions === true) {
      return (
        <div className="header" style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} onClick={() => {
          onCloseClick(false);
        }}>
          <h1>Read Our Lips</h1>
          <h2 style={{marginTop: 60}}>Instructions:</h2>
          <p>Click a number to change soundboards.</p>
          <p>Click a letter to play a sound.</p>

          <button id="startButton" style={{cursor: 'pointer', marginTop: 60, border: '1px solid #ddd', color: '#ddd', padding: '20px 40px', background: '#714766', fontSize: 20, borderRadius: 5}}>Start</button>

          <h1 style={
            {
              color: '#f10000'
            }
          }>
            BUG WORKAROUNDS
          </h1>
          <p>If you don't head sound, refresh</p>
          <p>Use Chrome! Don't use firefox! Especially don't press the spacebar in firefox, all the content will disappear. To fix it, click the url, and press enter. plain refreshing won't work.</p>

        </div>
      )
    }	else {
      return <span />
    }
  }
}