import React from 'react'
import Data from '../data'

export default class App extends React.Component {
  render() {
  	const { letter, soundboard, isPlaying, onLetterClick } = this.props;
    let foundKey;
    for (var i = 0; i < Data[soundboard].length; i++) {
      var keys = Data[soundboard][i].keys;
      
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        if (key.title === letter) {
          foundKey = key;
        }
      }
    }

    if (foundKey.urls && isPlaying === false) {
    	return (<div className="key" onClick={() => {
    		onLetterClick(foundKey, soundboard, isPlaying)
    	}}>{letter}</div>)	
    } else {
    	return (<div className="key disabled">{letter}</div>)
    }
  }
}