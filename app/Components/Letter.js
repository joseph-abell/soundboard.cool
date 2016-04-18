import React from 'react'
import Data from '../data'

export default class App extends React.Component {
  render() {
  	const { letter, soundboard, isPlaying, onLetterClick } = this.props;

    if (Data[soundboard][letter].length > 0 && isPlaying === false) {
    	return (<div className="key" onClick={() => {
    		onLetterClick(letter, soundboard, isPlaying)
    	}}>{letter}</div>)	
    } else {
    	return (<div className="key disabled">{letter}</div>)
    }
	
  }
}