import { soundManager } from 'soundmanager2'

export default {
	"Songs and Stings": [
		{
			keys: [
				{
					title: 'q'
				},
				{
					title: 'w',
					urls: [
						'./audio/Chris/Wizard.mp3'
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
	],
	"Chris Remo": [
		{
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
	],
	"Nick Breckon": [
	{
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
						'./audio/Chris/BearStart.mp3',
						'./audio/Chris/BearLoop.mp3'
					],
					specialRules: (urls, dispatch, togglePlaying) => {
						let mySound = soundManager.createSound({
							url: urls[0],
							autoPlay: true,
							onfinish: () => {
								mySound = soundManager.createSound({
									url: urls[1],
									autoPlay: true,
									onfinish: () => {
										mySound.play();
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
};