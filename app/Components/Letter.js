import React from 'react'
import Data from '../data'

export default class App extends React.Component {
  render() {
  	const { 
      letter, 
      soundboard,
      canAnimate,
      onLetterClick,
      globalCounter, 
      personalCounter,
      baboos, 
      wizards,
      killBearButton
    } = this.props;

    let trueSoundboard;
    let foundKey;
    
    for (var i = 0; i < Data.soundboards.length; i++) {
      if (Data.soundboards[i].title === soundboard) {
        trueSoundboard = Data.soundboards[i]
      }
    }

    for (var j = 0; j < trueSoundboard.rows.length; j++) {
      var keys = trueSoundboard.rows[j].keys;
      
      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        if (key.title === letter) {
          foundKey = key;
        }
      }
    }
      

    if (foundKey.urls && killBearButton === 0 ) {
    	return (<div className="key" id={"key" + letter} onClick={() => {
    		onLetterClick(foundKey, soundboard, globalCounter, personalCounter, canAnimate, baboos, wizards)
    	}}>{letter}</div>)	
    } else {
    	return (<div className="key disabled">{letter}</div>)
    }
  }
}