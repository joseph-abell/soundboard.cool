import React from 'react';
import Letter from '../Containers/Letter';
import NumberKey from '../Containers/Number';
import Data from '../data';

class Keys extends React.Component {
	render() {
		let { row } = this.props

		let keys = row.keys.map(item => {
			return (
				<Letter letter={item.title} key={item.title} />
			)
		})
		return (
			<span key={row.id}>{keys}</span>
		)
	}
}

export default class Soundboard extends React.Component {
	render() {
		const { showInstructions, soundboard } = this.props;
		let trueSoundboard;

		Data.soundboards.map( testSoundboard => {
			if (testSoundboard.title === soundboard) {
				trueSoundboard = testSoundboard;
			}
		})


		let rows = trueSoundboard.rows.map( row => {
			return (
				<div className="row" key={row.id}>
					<Keys row={row} />
				</div>
			)
		});


		if (showInstructions === true) {
			return <div />
		} else {
			return (
				<div className="soundboard">
					<h1>{soundboard}</h1>
					<div className="row">
						<NumberKey numberKey="1" enabled={true} />
						<NumberKey numberKey="2" enabled={true} />
						<NumberKey numberKey="3" enabled={true} />
						<NumberKey numberKey="4" enabled={false} />
						<NumberKey numberKey="5" enabled={false} />
						<NumberKey numberKey="6" enabled={false} />
						<NumberKey numberKey="7" enabled={false} />
						<NumberKey numberKey="8" enabled={false} />
						<NumberKey numberKey="9" enabled={false} />
						<NumberKey numberKey="0" enabled={false} />
					</div>
					<div className="soundboard-inner" key={trueSoundboard.title}>
						{rows}
					</div>
				</div>
			);  
		}
	}
}