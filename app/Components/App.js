import React from 'react';
import Instructions from '../Containers/Instructions';
import Soundboard from '../Containers/Soundboard';
import AnimationElements from '../Containers/AnimationElements';
import Stats from '../Containers/Stats'

export default class App extends React.Component {
  render() {
    return (
    	<div>
	    	<Instructions />
	    	<Soundboard />
	    	<AnimationElements />
        <Stats />
    	</div>
    );
  }
}