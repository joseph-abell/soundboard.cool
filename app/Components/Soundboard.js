import React from 'react';
import Letter from '../Containers/Letter';
import NumberKey from '../Containers/Number';
import KillButton from '../Containers/KillButton';
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
		const { showInstructions, soundboard, keyTitle, killBearButton, onCheatMenuButtonClick } = this.props;
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

		let numberKeys = Data.numbers.map ( numberKey => {
			if (numberKey.title) {
				return <NumberKey numberKey={numberKey.numberKey} key={numberKey.id} enabled={true} />
			} else {
				return <NumberKey numberKey={numberKey.numberKey} key={numberKey.id} enabled={false} />
			}
		});

		if (showInstructions === true) {
			return <div />
		} else {
			return (
				<div className="soundboard">
					<div className="row header soundboard-inner">
						<h2>Soundboards: {soundboard}</h2>
						{numberKeys}
					</div>
					<div className="soundboard-inner article" key={trueSoundboard.title}>
						<h2>Sounds: {keyTitle || "Sweet, sweet silence"}</h2>
						{rows}
						{killBearButton === 1 && <div className="spacebar disabled">Wait for it...</div>}
						{killBearButton === 3 && <div className="spacebar disabled">You Monster</div>}
						<KillButton />
					</div>
					<span id="cheatMenuButton" onClick={() => {
						onCheatMenuButtonClick();
					}}></span>
				</div>
			);  
		}
	}
}