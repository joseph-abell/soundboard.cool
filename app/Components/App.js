import React from 'react';
import Instructions from '../Containers/Instructions';
import Soundboard from '../Containers/Soundboard';

export default class App extends React.Component {
  render() {
    return (
    	<div>
	    	<Instructions />
	    	<Soundboard />
    	</div>
    );
  }
}