import { soundManager } from 'soundmanager2'
import { toggleKillBearVisible, togglePlaying } from './Actions'

export default {
	numbers: [
		{
			id: 0,
			numberKey: '1',
			title: 'Songs and Stings'
		},
		{
			id: 1,
			numberKey: '2',
			title: 'Chris Remo'
		},
		{
			id: 2,
			numberKey: '3',
			title: 'Nick Breckon'
		},
		{
			id: 3,
			numberKey: '4'
		},
		{
			id: 4,
			numberKey: '5'
		},
		{
			id: 5,
			numberKey: '6'
		},
		{
			id: 6,
			numberKey: '7'
		},
		{
			id: 7,
			numberKey: '8'
		},
		{
			id: 8,
			numberKey: '9'
		},
		{
			id: 9,
			numberKey: '0'
		}
	],
	soundboards: [
		{
			title: "Songs and Stings",
			rows: [
				{
					id: 0,
					keys: [
						{
							title: 'q'
						},
						{
							title: 'w',
							urls: [
								'./audio/Jingles/Wizard.mp3'
							]
						},
						{
							title: 'e'
						},
						{
							title: 'r'
						},
						{
							title: 't'
						},
						{
							title: 'y'
						},
						{
							title: 'u'
						},
						{
							title: 'i'
						},
						{
							title: 'o'
						},
						{
							title: 'p'
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a'
						},
						{
							title: 's'
						},
						{
							title: 'd'
						},
						{
							title: 'f'
						},
						{
							title: 'g'
						},
						{
							title: 'h'
						},
						{
							title: 'j'
						},
						{
							title: 'k'
						},
						{
							title: 'l'
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z'
						},
						{
							title: 'x'
						},
						{
							title: 'c'
						},
						{
							title: 'v'
						},
						{
							title: 'b'
						},
						{
							title: 'n'
						},
						{
							title: 'm'
						}
					]
				}
			]
		},
		{
			title: "Chris Remo",
			rows: [
				{
					id: 0,
					keys: [
						{
							title: 'q'
						},
						{
							title: 'w'
						},
						{
							title: 'e'
						},
						{
							title: 'r'
						},
						{
							title: 't'
						},
						{
							title: 'y'
						},
						{
							title: 'u'
						},
						{
							title: 'i'
						},
						{
							title: 'o',
							urls: [
								'./audio/Chris/OhManFuckNo.mp3'
							]
						},
						{
							title: 'p'
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a'
						},
						{
							title: 's'
						},
						{
							title: 'd'
						},
						{
							title: 'f'
						},
						{
							title: 'g'
						},
						{
							title: 'h'
						},
						{
							title: 'j'
						},
						{
							title: 'k'
						},
						{
							title: 'l'
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z'
						},
						{
							title: 'x'
						},
						{
							title: 'c'
						},
						{
							title: 'v'
						},
						{
							title: 'b'
						},
						{
							title: 'n'
						},
						{
							title: 'm'
						}
					]
				}
			]
		},
		{
			title: 'Nick Breckon',
			rows: [
				{
					id: 0,
					keys: [
						{
							title: 'q'
						},
						{
							title: 'w'
						},
						{
							title: 'e'
						},
						{
							title: 'r'
						},
						{
							title: 't'
						},
						{
							title: 'y'
						},
						{
							title: 'u'
						},
						{
							title: 'i'
						},
						{
							title: 'o'
						},
						{
							title: 'p'
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a'
						},
						{
							title: 's'
						},
						{
							title: 'd'
						},
						{
							title: 'f'
						},
						{
							title: 'g'
						},
						{
							title: 'h'
						},
						{
							title: 'j'
						},
						{
							title: 'k'
						},
						{
							title: 'l'
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z'
						},
						{
							title: 'x'
						},
						{
							title: 'c'
						},
						{
							title: 'v'
						},
						{
							title: 'b',
							urls: [
								'./audio/Nick/BearStart.mp3',
								'./audio/Nick/BearLoop.mp3',
								'./audio/Nick/BearEnd.mp3'
							],
							specialRules: (urls, dispatch) => {
								let visibleButton = false;
								let mySound = soundManager.createSound({
									url: urls[0],
									autoPlay: true,
									onfinish: () => {
										mySound = soundManager.createSound({
											url: urls[1],
											autoPlay: true,
											onfinish: () => {
												if (visibleButton === false) {
													dispatch(toggleKillBearVisible(true, soundManager))
													visibleButton = true;
												}
												mySound.play();
											},
											onstop: () => {
												mySound = soundManager.createSound({
													url: urls[2],
													autoPlay: true,
													onfinish: () => {
														dispatch(togglePlaying(false))
													}
												})
											}
										});
									}
								});
							}
						},
						{
							title: 'n'
						},
						{
							title: 'm'
						}
					]
				}
			]
		}
	]
};