import React from 'react';
import Letter from '../Containers/Letter';
import NumberKey from '../Containers/Number';

export default class Soundboard extends React.Component {
	render() {
		const { showInstructions, soundboard } = this.props;
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
					<div className="row">
						<div className="spacer" />
						<div className="spacer" />
						<div className="spacer" />
						<div className="spacer" />
						<div className="spacer" />
						<div className="spacer" />
						<Letter letter='q' />
						<Letter letter='w' />
						<Letter letter='e' />
						<Letter letter='r' />
						<Letter letter='t' />
						<Letter letter='y' />
						<Letter letter='u' />
						<Letter letter='i' />
						<Letter letter='o' />
						<Letter letter='p' />
					</div>
					<div className="row">
						<div className="spacer" />
						<div className="spacer" />
						<Letter letter='a' />
						<Letter letter='s' />
						<Letter letter='d' />
						<Letter letter='f' />
						<Letter letter='g' />
						<Letter letter='h' />
						<Letter letter='j' />
						<Letter letter='k' />
						<Letter letter='l' />
					</div>
					<div className="row">
						<Letter letter='z' />
						<Letter letter='x' />
						<Letter letter='c' />
						<Letter letter='v' />
						<Letter letter='b' />
						<Letter letter='n' />
						<Letter letter='m' />
						<div className="spacer" />
						<div className="spacer" />
						<div className="spacer" />
						<div className="spacer" />
						<div className="spacer" />
						<div className="spacer" />
					</div>
				</div>
			);  
		}
	}
}