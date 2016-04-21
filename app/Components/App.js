import React from 'react';
import Instructions from '../Containers/Instructions';
import Soundboard from '../Containers/Soundboard';
import KillButton from '../Containers/KillButton';

export default class App extends React.Component {
  render() {
    return (
    	<div>
	    	<Instructions />
	    	<Soundboard />
	    	<KillButton />
    	</div>
    );
  }
}