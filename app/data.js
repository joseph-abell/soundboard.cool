import { soundManager } from 'soundmanager2'
import Firebase from 'firebase';
import { 
	toggleKillBearVisible, 
	togglePlaying, 
	animation,
	soundboard,
	canAnimate, 
	wizards
} from './Actions'
let fireRef = new Firebase('https://soundboardcool.firebaseio.com/');


const defaultActionNoAnimation = (dispatch, audioTitle, audioFileUrl) => {
	dispatch(togglePlaying(audioTitle))

	const mySound = soundManager.createSound({
		url: audioFileUrl,
		autoPlay: true
	});	
}
const defaultActionWithAnimation = (dispatch, audioTitle, audioFileUrl, animationType, isNotAnimating) => {
	dispatch(togglePlaying(audioTitle))
	const canThisAnimate = isNotAnimating;
	const mySound = soundManager.createSound({
		url: audioFileUrl,
		autoPlay: true,
		onplay: () => {
			if (canThisAnimate) {
				dispatch(animation(animationType))	
				dispatch(canAnimate(false))
			}
		},
		onfinish: () => {
			if (canThisAnimate) {
				dispatch(animation(''))
				dispatch(canAnimate(true))
			}
		}
	});	
}

export default {
	numbers: [
		{
			id: 1,
			numberKey: '1',
			title: 'Chris Remo'
		},
		{
			id: 2,
			numberKey: '2',
			title: 'Nick Breckon'
		},
		{
			id: 3,
			numberKey: '3',
			title: 'Jake Rodkin'
		},
		{
			id: 4,
			numberKey: '4',
			title: 'Sean Vanaman'
		},
		{
			id: 5,
			numberKey: '5'
		},
		{
			id: 6,
			numberKey: '6'
		},
		{
			id: 7,
			numberKey: '7'
		},
		{
			id: 8,
			numberKey: '8'
		},
		{
			id: 9,
			numberKey: '9',
			title: 'Baboo'
		},
		{
			id: 0,
			numberKey: '0',
			title: 'Intros, Outros, Songs and Stings'
		},
	],
	soundboards: [
		{
			title: "Intros, Outros, Songs and Stings",
			rows: [
				{
					id: 0,
					keys: [
						{
							title: 'q',
							audioTitle: 'Wizard',
							urls: [
								'./audio/Intros/Wizard2.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'wizards': ++optionalExtras[1]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'w',
							audioTitle: 'Wizard',
							urls: [
								'./audio/Intros/Wizard.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'wizards': ++optionalExtras[1]})
								defaultActionWithAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0], 'Wizard', optionalExtras[2])								
							}
						},
						{
							title: 'e',
							audioTitle: 'Wizard',
							urls: [
								'./audio/Intros/Wizard3.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'wizards': ++optionalExtras[1]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'r',
							audioTitle: 'Wizard',
							urls: [
								'./audio/Intros/Wizard4.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'wizards': ++optionalExtras[1]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 't',
							audioTitle: 'Wizard',
							urls: [
								'./audio/Intros/Wizard5.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'wizards': ++optionalExtras[1]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'y',
							audioTitle: ''
						},
						{
							title: 'u',
							audioTitle: ''
						},
						{
							title: 'i',
							audioTitle: ''
						},
						{
							title: 'o',
							audioTitle: 'Ode To Waluigi, by Sam Daly (Grade 4)',
							urls: [
								'./audio/Intros/OdeToWaluigi.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'p',
							audioTitle: ''
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a',
							audioTitle: ''
						},
						{
							title: 's',
							audioTitle: 'Oh Snap',
							urls: [
								'./audio/Intros/OhSnap.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'd',
							audioTitle: ''
						},
						{
							title: 'f',
							audioTitle: ''
						},
						{
							title: 'g',
							audioTitle: ''
						},
						{
							title: 'h',
							audioTitle: ''
						},
						{
							title: 'j',
							audioTitle: ''
						},
						{
							title: 'k',
							audioTitle: ''
						},
						{
							title: 'l',
							audioTitle: ''
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z',
							audioTitle: ''
						},
						{
							title: 'x',
							audioTitle: ''
						},
						{
							title: 'c',
							audioTitle: ''
						},
						{
							title: 'v',
							audioTitle: 'Video Games',
							urls: [
								'./audio/Intros/VideoGames.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'b',
							audioTitle: 'Best Video Game',
							urls: [
								'./audio/Intros/BestVideoGame.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'n',
							audioTitle: 'No Game Disc or Cartridge',
							urls: [
								'./audio/Intros/NoDiscOrCartidge.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'm',
							audioTitle: 'Morning Show',
							urls: [
								'./audio/Intros/MorningShow.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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
							title: 'q',
							audioTitle: ''
						},
						{
							title: 'w',
							audioTitle: ''
						},
						{
							title: 'e',
							audioTitle: ''
						},
						{
							title: 'r',
							audioTitle: ''
						},
						{
							title: 't',
							audioTitle: ''
						},
						{
							title: 'y',
							audioTitle: ''
						},
						{
							title: 'u',
							audioTitle: ''
						},
						{
							title: 'i',
							audioTitle: ''
						},
						{
							title: 'o',
							audioTitle: 'Oh Man',
							urls: [
								'./audio/Chris/OhManFuckNo.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'p',
							audioTitle: ''
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a',
							audioTitle: ''
						},
						{
							title: 's',
							audioTitle: ''
						},
						{
							title: 'd',
							audioTitle: ''
						},
						{
							title: 'f',
							audioTitle: ''
						},
						{
							title: 'g',
							audioTitle: ''
						},
						{
							title: 'h',
							audioTitle: ''
						},
						{
							title: 'j',
							audioTitle: ''
						},
						{
							title: 'k',
							audioTitle: ''
						},
						{
							title: 'l',
							audioTitle: ''
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z',
							audioTitle: ''
						},
						{
							title: 'x',
							audioTitle: ''
						},
						{
							title: 'c',
							audioTitle: ''
						},
						{
							title: 'v',
							audioTitle: ''
						},
						{
							title: 'b',
							audioTitle: ''
						},
						{
							title: 'n',
							audioTitle: ''
						},
						{
							title: 'm',
							audioTitle: ''
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
							title: 'q',
							audioTitle: ''
						},
						{
							title: 'w',
							audioTitle: ''
						},
						{
							title: 'e',
							audioTitle: ''
						},
						{
							title: 'r',
							audioTitle: ''
						},
						{
							title: 't',
							audioTitle: ''
						},
						{
							title: 'y',
							audioTitle: ''
						},
						{
							title: 'u',
							audioTitle: ''
						},
						{
							title: 'i',
							audioTitle: ''
						},
						{
							title: 'o',
							audioTitle: ''
						},
						{
							title: 'p',
							audioTitle: ''
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a',
							audioTitle: ''
						},
						{
							title: 's',
							audioTitle: ''
						},
						{
							title: 'd',
							audioTitle: ''
						},
						{
							title: 'f',
							audioTitle: ''
						},
						{
							title: 'g',
							audioTitle: ''
						},
						{
							title: 'h',
							audioTitle: ''
						},
						{
							title: 'j',
							audioTitle: ''
						},
						{
							title: 'k',
							audioTitle: ''
						},
						{
							title: 'l',
							audioTitle: ''
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z',
							audioTitle: ''
						},
						{
							title: 'x',
							audioTitle: ''
						},
						{
							title: 'c',
							audioTitle: ''
						},
						{
							title: 'v',
							audioTitle: ''
						},
						{
							title: 'b',
							audioTitle: 'The Bear',
							urls: [
								'./audio/Nick/BearStart.mp3',
								'./audio/Nick/BearLoop.mp3',
								'./audio/Nick/BearEnd.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								dispatch(togglePlaying(foundKey.audioTitle))
								dispatch(toggleKillBearVisible(1))

								let visibleButton = false;
								let mySound, mySound2;

								mySound = soundManager.createSound({
									url: foundKey.urls[0],
									autoPlay: true,
									onfinish: () => {
										dispatch(toggleKillBearVisible(2, soundManager))
										mySound2 = soundManager.createSound({
											url: foundKey.urls[1],
											autoPlay: true,
											onplay: () => {
												if (visibleButton === false) {
													visibleButton = true;
												}
											},
											onfinish: () => {
												mySound2.play();
											},
											onstop: () => {
												mySound = soundManager.createSound({
													url: foundKey.urls[2],
													autoPlay: true,
													onplay: () => {
														dispatch(toggleKillBearVisible(3))
													},
													onfinish: () => {
														dispatch(toggleKillBearVisible(0))
													}
												})
											}
										})
									}
								});
							}
						},
						{
							title: 'n',
							audioTitle: ''
						},
						{
							title: 'm',
							audioTitle: ''
						}
					]
				}
			]
		},
		{
			title: 'Jake Rodkin',
			rows: [
				{
					id: 0,
					keys: [
						{
							title: 'q',
							audioTitle: ''
						},
						{
							title: 'w',
							audioTitle: ''
						},
						{
							title: 'e',
							audioTitle: ''
						},
						{
							title: 'r',
							audioTitle: ''
						},
						{
							title: 't',
							audioTitle: ''
						},
						{
							title: 'y',
							audioTitle: 'Year of the Playstation What?',
							urls: ['./audio/Jake/YearOfThePs3.mp3'],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'u',
							audioTitle: ''
						},
						{
							title: 'i',
							audioTitle: ''
						},
						{
							title: 'o',
							audioTitle: ''
						},
						{
							title: 'p',
							audioTitle: ''
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a',
							audioTitle: ''
						},
						{
							title: 's',
							audioTitle: ''
						},
						{
							title: 'd',
							audioTitle: ''
						},
						{
							title: 'f',
							audioTitle: ''
						},
						{
							title: 'g',
							audioTitle: ''
						},
						{
							title: 'h',
							audioTitle: ''
						},
						{
							title: 'j',
							audioTitle: ''
						},
						{
							title: 'k',
							audioTitle: ''
						},
						{
							title: 'l',
							audioTitle: ''
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z',
							audioTitle: ''
						},
						{
							title: 'x',
							audioTitle: ''
						},
						{
							title: 'c',
							audioTitle: ''
						},
						{
							title: 'v',
							audioTitle: ''
						},
						{
							title: 'b',
							audioTitle: ''
						},
						{
							title: 'n',
							audioTitle: ''
						},
						{
							title: 'm',
							audioTitle: ''
						}
					]
				}
			]
		},
		{
			title: 'Sean Vanaman',
			rows: [
				{
					id: 0,
					keys: [
						{
							title: 'q',
							audioTitle: ''
						},
						{
							title: 'w',
							audioTitle: ''
						},
						{
							title: 'e',
							audioTitle: ''
						},
						{
							title: 'r',
							audioTitle: ''
						},
						{
							title: 't',
							audioTitle: ''
						},
						{
							title: 'y',
							audioTitle: '',
						},
						{
							title: 'u',
							audioTitle: ''
						},
						{
							title: 'i',
							audioTitle: ''
						},
						{
							title: 'o',
							audioTitle: ''
						},
						{
							title: 'p',
							audioTitle: ''
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a',
							audioTitle: ''
						},
						{
							title: 's',
							audioTitle: ''
						},
						{
							title: 'd',
							audioTitle: ''
						},
						{
							title: 'f',
							audioTitle: ''
						},
						{
							title: 'g',
							audioTitle: ''
						},
						{
							title: 'h',
							audioTitle: ''
						},
						{
							title: 'j',
							audioTitle: 'Jake is a Liar',
							urls: [
								'./audio/Sean/JakeLiar.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}	
						},
						{
							title: 'k',
							audioTitle: ''
						},
						{
							title: 'l',
							audioTitle: ''
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z',
							audioTitle: ''
						},
						{
							title: 'x',
							audioTitle: ''
						},
						{
							title: 'c',
							audioTitle: ''
						},
						{
							title: 'v',
							audioTitle: ''
						},
						{
							title: 'b',
							audioTitle: ''
						},
						{
							title: 'n',
							audioTitle: ''
						},
						{
							title: 'm',
							audioTitle: 'Moore\'s Law',
							urls: [
								'./audio/Sean/MooresLaw.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						}
					]
				}
			]
		},
		{
			title: 'Baboo',
			rows: [
				{
					id: 10,
					keys: [
						{
							title: 'q',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo001.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'w',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo002.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'e',
							audioTitle: ''
						},
						{
							title: 'r',
							audioTitle: ''
						},
						{
							title: 't',
							audioTitle: ''
						},
						{
							title: 'y',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/Baboo005.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'u',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/Baboo006.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'i',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/Baboo007.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'o',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/Baboo009.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'p',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/Baboo010.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						}
					]
				},
				{
					id: 1,
					keys: [
						{
							title: 'a',
							audioTitle: ''
						},
						{
							title: 's',
							audioTitle: ''
						},
						{
							title: 'd',
							audioTitle: ''
						},
						{
							title: 'f',
							audioTitle: ''
						},
						{
							title: 'g',
							audioTitle: ''
						},
						{
							title: 'h',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo004.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'j',
							audioTitle: 'The Metaphorical Bird',
							urls: [
								'./audio/Baboo/BabooIntro.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'k',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo003.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'l',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/Baboo008.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						}
					]
				},
				{
					id: 2,
					keys: [
						{
							title: 'z',
							audioTitle: 'Reader Baboo (Xeneth)',
							urls: [
								'./audio/Baboo/BabooXeneth001.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'x',
							audioTitle: 'Reader Baboo (Xeneth)',
							urls: [
								'./audio/Baboo/BabooXeneth002.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'c',
							audioTitle: 'Reader Baboo (Knight)',
							urls: [
								'./audio/Baboo/BabooKnight001.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
							
						},
						{
							title: 'v',
							audioTitle: 'Reader Baboo (Knight)',
							urls: [
								'./audio/Baboo/BabooKnight002.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'b',
							audioTitle: 'Reader Baboo (Knight)',
							urls: [
								'./audio/Baboo/BabooKnight003.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'n',
							audioTitle: 'Reader Baboo (Knight)',
							urls: [
								'./audio/Baboo/BabooKnight004.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'm',
							audioTitle: 'Reader Baboo (Knight)',
							urls: [
								'./audio/Baboo/BabooKnight005.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						}
					]
				}
			]
		}
	]
};