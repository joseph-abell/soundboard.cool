import React from 'react';
import Instructions from '../Containers/Instructions';
import Soundboard from '../Containers/Soundboard';
import AnimationElements from '../Containers/AnimationElements';
import Stats from '../Containers/Stats'
import CheatMenu from '../Containers/CheatMenu'

export default class App extends React.Component {
  render() {
    return (
    	<div>
	    	<Instructions />
        <CheatMenu />
	    	<Soundboard />
	    	<AnimationElements />
        <Stats />
    	</div>
    );
  }
}