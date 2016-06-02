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

export const soundManager2 = soundManager;

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
			numberKey: '6',
			title: 'Slack Slack Slack Slack Slack Slack Slack Slack Slack Slack'
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
								fireRef.child('global').update({'wizards': ++optionalExtras[1]})
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
								fireRef.child('global').update({'wizards': ++optionalExtras[1]})
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
								fireRef.child('global').update({'wizards': ++optionalExtras[1]})
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
								fireRef.child('global').update({'wizards': ++optionalExtras[1]})
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
								fireRef.child('global').update({'wizards': ++optionalExtras[1]})
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
							audioTitle: 'Robot Remo',
							urls: [
								'./audio/Chris/RobotRemo.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 't',
							audioTitle: 'Trust',
							urls: [
								'./audio/Chris/Trust.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
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
							audioTitle: 'Swallowed My D',
							urls: [
								'./audio/Chris/Swallowed My D.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'd',
							audioTitle: 'Stupid',
							urls: [
								'./audio/Chris/Stupid.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'f',
							audioTitle: 'Flower',
							urls: [
								'./audio/Chris/Flower.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'g',
							audioTitle: 'Good Counterpoint',
							urls: [
								'./audio/Chris/Good Counterpoint.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'h',
							audioTitle: ''
						},
						{
							title: 'j',
							audioTitle: 'Jonathan Bro',
							urls: [
								'./audio/Chris/JonathanBro.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'k',
							audioTitle: 'I Know I Nailed It',
							urls: [
								'./audio/Chris/NailedIt.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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
							audioTitle: 'Break',
							urls: [
								'./audio/Chris/Break.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'n',
							audioTitle: 'Become Metalheads',
							urls: [
								'./audio/Chris/BecomeMetalheads.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'm',
							audioTitle: 'The Moon, and the Enjoyment thereof',
							urls: [
								'./audio/Chris/Moon.mp3'
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
			title: 'Nick Breckon',
			rows: [
				{
					id: 0,
					keys: [
						{
							title: 'q',
							audioTitle: 'What The Hell Was That!?',
							urls: [
								'./audio/Nick/WhatWasThat.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'w',
							audioTitle: 'Weird',
							urls: [
								'./audio/Nick/weird.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'e',
							audioTitle: ''
						},
						{
							title: 'r',
							audioTitle: 'Romantic',
							urls: [
								'./audio/Nick/Romantic.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 't',
							audioTitle: 'That\'s Cool',
							urls: [
								'./audio/Nick/ThatsCool.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'y',
							audioTitle: 'You Know',
							urls: [
								'./audio/Nick/HesYouKnow.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'u',
							audioTitle: 'Fun',
							urls: [
								'./audio/Nick/Fun.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'i',
							audioTitle: 'Yeah I Am',
							urls: [
								'./audio/Nick/Yeah.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'o',
							audioTitle: 'Okay',
							urls: [
								'./audio/Nick/Ok.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'p',
							audioTitle: 'Surely Is',
							urls: [
								'./audio/Nick/SurelyIs.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
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
							audioTitle: '',
							audioTitle: 'All The Money',
							urls: [
								'./audio/Nick/AllTheMoney.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 's',
							audioTitle: 'Strange',
							urls: [
								'./audio/Nick/Strange.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'd',
							audioTitle: 'DuhDuhDuhDuhDuhDuh',
							urls: [
								'./audio/Nick/DuhDuhDuh.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'f',
							audioTitle: 'Fine',
							urls: [
								'./audio/Nick/Fine.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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
							audioTitle: 'The Joker',
							urls: [
								'./audio/Nick/Stroke.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'k',
							audioTitle: 'Killed My Son',
							urls: [
								'./audio/Nick/KilledSon.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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
							audioTitle: 'Jesus Christ',
							urls: [
								'./audio/Nick/Christ.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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

								soundManager.stopAll();

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
							audioTitle: 'Not That Good',
							urls: [
								'./audio/Nick/NotThatGood.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'm',
							audioTitle: 'Mind Control',
							urls: [
								'./audio/Nick/MindControl.mp3'
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
							audioTitle: 'What You Want',
							urls: [
								'./audio/Jake/WhatYouWant.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'e',
							audioTitle: 'Eyeroll',
							urls: [
								'./audio/Jake/Eyeroll.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'r',
							audioTitle: 'Robot Don\'t Care',
							urls: [
								'./audio/Jake/Robot.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 't',
							audioTitle: 'Throw',
							urls: [
								'./audio/Jake/Throw.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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
							audioTitle: 'Trust',
							urls: [
								'./audio/Jake/Trust.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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
							audioTitle: 'Alt F4',
							urls: [
								'./audio/Jake/AltF4.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 's',
							audioTitle: 'Snake',
							urls: [
								'./audio/Jake/Snake.mp3'
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
							audioTitle: 'Fire',
							urls: [
								'./audio/Jake/Fire.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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
							audioTitle: 'Love',
							urls: [
								'./audio/Jake/Love.mp3'
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
							audioTitle: 'No Bees Mode',
							urls: [
								'./audio/Jake/NoBeesMode.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'n',
							audioTitle: 'No It\'s Not!',
							urls: [
								'./audio/Jake/NoItsNot.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'm',
							audioTitle: 'Shithead Man',
							urls: [
								'./audio/Jake/ShitheadMan.mp3'
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
			title: 'Slack Slack Slack Slack Slack Slack Slack Slack Slack Slack',
			rows: [
				{
					id: 0,
					keys: [
						{
							title: 'q',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'w',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'e',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'r',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 't',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 't',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'y',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'u',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'i',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'o',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'p',
							audioTitle: '',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						}
					]
				}, {
					id: 1,
					keys: [
						{
							title: 'a',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 's',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'd',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'f',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'g',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'h',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'j',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'k',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'l',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						}
					]
				}, {
					id: 2,
					keys: [
						{
							title: 'z',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'x',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'c',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'v',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'b',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'n',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
							}
						},
						{
							title: 'm',
							audioTitle: 'Slack',
							urls: ["hi"],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								$('#cheatMenuButton').click();
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
					id: 0,
					keys: [
						{
							title: 'q',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo001.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								'./audio/Baboo/baboo005.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'u',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo006.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'i',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo007.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'o',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo009.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'p',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo010.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
							audioTitle: 'Reader Baboo (Jack Giles)',
							urls: [
								'./audio/Baboo/BabooJackGiles.mp3'
							],
							rules: (foundKey, dispatch, optionalExtras = []) => {
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						},
						{
							title: 'l',
							audioTitle: 'Baboo',
							urls: [
								'./audio/Baboo/baboo008.mp3'
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
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
								fireRef.child('global').update({'baboos': ++optionalExtras[0]})
								defaultActionNoAnimation(dispatch, foundKey.audioTitle, foundKey.urls[0]);
							}
						}
					]
				}
			]
		}
	],
	channelMessages: {
		general: [
			{
				person: 'slackbot',
				time: '10.14am',
				says: 'To quit slack, go to slackbot in messages, and type the word exit.'	
			}
		],
		random: [
			{
				person: 'slackbot',
				time: '10.14am',
				says: 'To quit slack, go to slackbot in messages, and type the word exit.'	
			}
		]
	},
	privateConversations: {
		slackbot: [
			{
				person: 'slackbot',
				time: '10.14am',
				says: 'If you want to leave slack, say "exit", or "quit", to me.'	
			},
			{
				person: 'slackbot',
				time: '10.14am',
				says: 'Looks like everyone else is away. I was meant to be a fully featured chatbot, but my maker ran out of time.'
			},
			{
				person: 'slackbot',
				time: '10.14am',
				says: 'You can try typing a few things, maybe I will respond to them. Most likely not.'
			}
			
		],
		luigi: [
			{
				person: 'luigi',
				time: '12.03pm',
				says: 'What happened at the start?'
			},
			{
				person: 'waluigi',
				time: '12.04pm',
				says: 'You! Asking what happened at the start? If I don\'t go to the left, you crash into us, and all three go out.'
			},
			{
				person: 'luigi',
				time: '12.04pm',
				says: 'well'
			},
			{
				person: 'waluigi',
				time: '12.04pm',
				says: 'No, no well. You came like a torpedo'
			},
			{
				person: 'luigi',
				time: '12.05pm',
				says: 'Well, I was racing lol'
			},
			{
				person: 'waluigi',
				time: '12.05pm',
				says: 'Yes, that was racing, but if I kept going in the same line, you know, you would crash.'
			},
			{
				person: 'luigi',
				time: '12.06pm',
				says: 'don\'t keep going'
			},
			{
				person: 'waluigi',
				time: '12.06pm',
				says: 'well, there was a car on the left, also'
			},
			{
				person: 'luigi',
				time: '12.07pm',
				says: 'I can\'t see all the three cars, man, come on. I only have two eyes. two cars.'
			},
			{
				person: 'waluigi',
				time: '12.08pm',
				says: 'You crash if you do like that'
			},
			{
				person: 'luigi',
				time: '12.08pm',
				says: 'We didn\'t, so'
			},
			{
				person: 'waluigi',
				time: '12.09pm',
				says: 'You didn\'t. You could have damaged you car. you were lucky this time.'
			},
			{
				person: 'luigi',
				time: '12.12pm',
				says: 'I am on the podium. It is fine. You are on the podium. It is okay.'
			},
			{
				person: 'waluigi',
				time: '12.13pm',
				says: 'Wah...'
			}
		], 
		yoshi: [
			{
				person: 'waluigi',
				time: '11.12am',
				says: 'Sorry, Yoshi. Mario\'s just keep being an asshole. I\'ll talk to him later about the situation.'
			},
			{
				person: 'yoshi',
				time: '11.13am',
				says: 'Yoshi...'
			},
			{
				person: 'waluigi',
				time: '11.13am',
				says: 'Keep your chin up. If the worst comes to the worst, I\'ll set up another slack that isn\'t called Yoshi Sucks.'
			},
			{
				person: 'yoshi',
				time: '11.14am',
				says: ':('
			}
		],
		toad: [
			{
				person: 'waluigi',
				time: '5.45pm',
				says: 'Have you seen this? Pretty crazy: http://www.blankexit.com/mermaid-skeleton-found-bulgaria/'
			},
			{
				person: 'toad',
				time: '5.45pm',
				says: 'uh'
			},
			{
				person: 'toad',
				time: '5.47pm',
				says: 'yeah'
			},
			{
				person: 'waluigi',
				time: '5.47pm',
				says: 'Oh. Well I know you\'re into that old temple stuff.'
			},
			{
				person: 'waluigi',
				time: '5.47pm',
				says: 'in Gloomy Galleon even'
			},
			{
				person: 'toad',
				time: '5.48pm',
				says: 'Yeah. The thing is.'
			},
			{
				person: 'toad',
				time: '5.48pm',
				says: 'That\'s fake.'
			},
			{
				person: 'waluigi',
				time: '5.48pm',
				says: 'Wah?'
			},
			{
				person: 'toad',
				time: '5.49pm',
				says: 'I know you were just trying to be polite, share something relevant to my interests.'
			},
			{
				person: 'toad',
				time: '5.49pm',
				says: 'But that\'s been debunked. I debunked it.'
			},
			{
				person: 'waluigi',
				time: '5.49pm',
				says: 'Wah?'
			},
			{
				person: 'toad',
				time: '5.50pm',
				says: 'Last year, a Professor at U Goom asked me to check it out. Long story short: it was quite a trek. But it was all for naught; turned out to just be a crazy cobbled together thing. Though there was a mermaid living out there, she was nice.'
			},
			{
				person: 'toad',
				time: '5.51pm',
				says: 'You send me all these stories, I\'m surprised you didn\'t hear about "The Lady of Gloomy Galleon.”'
			},
			{
				person: 'waluigi',
				time: '5.52pm',
				says: 'I must\'ve missed it…'
			},
			{
				person: 'toad',
				time: '5.52pm',
				says: 'On a related note, you\'ve shared a lot of these with me.'
			},
			{
				person: 'waluigi',
				time: '5.52pm',
				says: 'yeah'
			},
			{
				person: 'toad',
				time: '5.53pm',
				says: 'And I appreciate the enthusiasm! But'
			},
			{
				person: 'toad',
				time: '5.53pm',
				says: 'they\'ve always been fakes.'
			},
			{
				person: 'waluigi',
				time: '5.53pm',
				says: 'oh'
			},
			{
				person: 'waluigi',
				time: '5.54pm',
				says: 'But what about the bumpties on Pyropuff Peaks?'
			},
			{
				person: 'toad',
				time: '5.54pm',
				says: 'Fake. It\'s a little too warm up there for penguins.'
			},
			{
				person: 'waluigi',
				time: '5.54pm',
				says: 'The Shadow Manor Phantom?'
			},
			{
				person: 'toad',
				time: '5.55pm',
				says: 'Boos. Common. An amalgamation of five Boos? Not so common.'
			},
			{
				person: 'waluigi',
				time: '5.55pm',
				says: 'The Sprixie Pixie Sprites?'
			},
			{
				person: 'toad',
				time: '5.56pm',
				says: 'Well'
			},
			{
				person: 'waluigi',
				time: '5.56pm',
				says: 'aha!'
			},
			{
				person: 'toad',
				time: '5.57pm',
				says: 'the sprixies are real, of course. But the mummies weren\'t. The sprixies don\'t actually mummify their rulers.'
			},
			{
				person: 'waluigi',
				time: '5.58pm',
				says: 'Wah…'
			},
			{
				person: 'toad',
				time: '5.58pm',
				says: 'I guess what I\'m asking is'
			},
			{
				person: 'toad',
				time: '5.58pm',
				says: 'Maybe you could stop sending me these? Their hoaxes, and really, you\'re just wasting your time.'
			},
			{
				person: 'waluigi',
				time: '5.59pm',
				says: 'Yeah. I could do that.'
			},
			{
				person: 'toad',
				time: '5.59pm',
				says: 'It\'s for your good really! Now you\'ll have more time in your day for'
			},
			{
				person: 'toad',
				time: '6.00pm',
				says: 'other stuff'
			},
			{
				person: 'toad',
				time: '6.00pm',
				says: 'Yeah!'
			},
			{
				person: 'waluigi',
				time: '6.00pm',
				says: 'Yeah.'
			},
			{
				person: 'toad',
				time: '6.01pm',
				says: 'Great! I\'ve an appointment, but if you\'d like – tomorrow – I can share some stories of the digs I\'ve gone on. Much more interesting than this fake stuff.'
			},
			{
				person: 'waluigi',
				time: '6.01pm',
				says: 'Sure.'
			},
			{
				person: 'waluigi',
				time: '6.01pm',
				says: 'That\'d be great.'
			},
			{
				person: 'toad',
				time: '6.02pm',
				says: 'Alright! See ya tomorrow!'
			},
			{
				person: 'waluigi',
				time: '6.07pm',
				says: 'Bye.'
			}
		],
		bowser: [
			{
				person: 'bowser',
				time: '10.05am',
				says: 'Wario, you remember where I left those tennis rackets?'
			},
			{
				person: 'waluigi',
				time: '10.07am',
				says: 'What?'
			},
			{
				person: 'bowser',
				time: '10.08am',
				says: 'the rackets Wario'
			},
			{
				person: 'bowser',
				time: '10.08am',
				says: 'for tomorrow'
			},
			{
				person: 'bowser',
				time: '10.08am',
				says: 'memory like a glurp, I swear...'
			},
			{
				person: 'waluigi',
				time: '10.09am',
				says: 'WHAT'
			},
			{
				person: 'waluigi',
				time: '10.09am',
				says: 'THIS IS WA_LUIGI_. HOW DO YOU EVEN CONFUSE US.'
			},
			{
				person: 'bowser',
				time: '10.09am',
				says: 'oh'
			},
			{
				person: 'bowser',
				time: '10.09am',
				says: 'uhh'
			},
			{
				person: 'bowser',
				time: '10.10am',
				says: 'my bad'
			},
			{
				person: 'waluigi',
				time: '10.10am',
				says: 'That\'s it?! We\'re nothing alike!'
			},
			{
				person: 'bowser',
				time: '10.10am',
				says: 'That\'s not entirely true... You both wear purple...'
			},
			{
				person: 'waluigi',
				time: '10.11am',
				says: 'Purple?! That\'s all you can think of???'
			},
			{
				person: 'waluigi',
				time: '10.11am',
				says: 'How about I\'m taller than him.'
			},
			{
				person: 'waluigi',
				time: '10.11am',
				says: 'or I\'m better than him at soccer'
			},
			{
				person: 'bowser',
				time: '10.12am',
				says: 'or he\'s got a business?'
			},
			{
				person: 'waluigi',
				time: '10.13am',
				says: 'WAH!'
			},
			{
				person: 'bowser',
				time: '10.14am',
				says: 'uh, i\'ll go now'
			},
			{
				person: 'bowser',
				time: '10.14am',
				says: 'sorry'
			},
			{
				person: 'waluigi',
				time: '10.15am',
				says: 'Wah...'
			},
			{
				person: 'waluigi',
				time: '11.15am',
				says: 'Wait.'
			},
			{
				person: 'waluigi',
				time: '11.15am',
				says: 'Rackets for tomorrow?'
			}
		],
		peach: [
			{
				person: 'waluigi',
				time: '12.11pm',
				says: 'Peach? Just had a question.'
			},
			{
				person: 'waluigi',
				time: '12.21pm',
				says: 'Hello?'
			},
			{
				person: 'waluigi',
				time: '1.01pm',
				says: 'You back yet?'
			},
			{
				person: 'waluigi',
				time: '1.32pm',
				says: 'Ok well'
			},
			{
				person: 'waluigi',
				time: '1.32pm',
				says: 'Just had a question about Daisy.'
			},
			{
				person: 'waluigi',
				time: '1.33pm',
				says: 'Maybe you\'ll be around later...'
			}
		],

		mario: [
			{
				person: 'waluigi',
				time: '12.14pm',
				says: 'Hey.'
			},
			{
				person: 'mario',
				time: '12.15pm',
				says: 'what'
			},
			{
				person: 'waluigi',
				time: '12.15pm',
				says: 'We need to talk.'
			},
			{
				person: 'mario',
				time: '12.16pm',
				says: 'about what'
			},
			{
				person: 'waluigi',
				time: '12.16pm',
				says: 'Yoshi.'
			},
			{
				person: 'mario',
				time: '12.17pm',
				says: 'and'
			},
			{
				person: 'waluigi',
				time: '12.18pm',
				says: 'Don\'t be obtuse.'
			},
			{
				person: 'mario',
				time: '12.18pm',
				says: 'then say it, you\'re wasting my time'
			},
			{
				person: 'waluigi',
				time: '12.18pm',
				says: 'The Slack title. Don\'t you think it\'s rude?'
			},
			{
				person: 'mario',
				time: '12.19pm',
				says: 'It\'s funny. everyone thinks it\'s funny.'
			},
			{
				person: 'waluigi',
				time: '12.19pm',
				says: 'Yoshi doesn\'t find it funny.'
			},
			{
				person: 'mario',
				time: '12.19pm',
				says: 'did he say that'
			},
			{
				person: 'waluigi',
				time: '12.20pm',
				says: 'Yeah! He did. To me.'
			},
			{
				person: 'mario',
				time: '12.21pm',
				says: 'If he doesn\'t find it funny, he can say it to me. he\'s never minded before'
			},
			{
				person: 'mario',
				time: '12.21pm',
				says: 'I joke about everyone, no one\'s complained before. I think you\'re just starting trouble.'
			},
			{
				person: 'waluigi',
				time: '12.22pm',
				says: 'Wah?'
			},
			{
				person: 'mario',
				time: '12.22pm',
				says: 'you\'re always starting shit and you back off as soon as someone calls you on it'
			},
			{
				person: 'mario',
				time: '12.22pm',
				says: 'so back off'
			},
			{
				person: 'waluigi',
				time: '12.23pm',
				says: 'Hey, I\'m not the one cracking “jokes” and making rude channels.'
			},
			{
				person: 'waluigi',
				time: '12.23pm',
				says: 'Don\'t try to paint me as the villain.'
			},
			{
				person: 'waluigi',
				time: '12.24pm',
				says: 'You\'re starting to be a real Wario.'
			},
			{
				person: 'mario',
				time: '12.25pm',
				says: 'Fuck you man. I don\'t have to take crap from you.'
			},
			{
				person: 'mario',
				time: '12.25pm',
				says: 'and you are a villain remember that'
			},
			{
				person: 'mario',
				time: '12.26pm',
				says: 'I started this slack, and if you don\'t like it, you can leave. no one would notice'
			},
			{
				person: 'waluigi',
				time: '12.27pm',
				says: 'Oh I think Yoshi would leave too if I told him your reaction.'
			},
			{
				person: 'mario',
				time: '12.27pm',
				says: 'crap again from you'
			},
			{
				person: 'waluigi',
				time: '12.27pm',
				says: 'Like I said, you hurt his feelings.'
			},
			{
				person: 'mario',
				time: '12.28pm',
				says: 'And another thing. it\'s clever'
			},
			{
				person: 'mario',
				time: '12.28pm',
				says: 'he eats Shy Guys, _sucks_ them in'
			},
			{
				person: 'waluigi',
				time: '12.29pm',
				says: 'Wha?'
			},
			{
				person: 'mario',
				time: '12.29pm',
				says: 'Clever.'
			},
			{
				person: 'mario',
				time: '12.33pm',
				says: 'ive got actual things to do kingdoms to save and stuff'
			},
			{
				person: 'mario',
				time: '12.33pm',
				says: 'the usual'
			},
			{
				person: 'mario',
				time: '12.33pm',
				says: 'and yoshis gonna help me with that'
			},
			{
				person: 'mario',
				time: '12.33pm',
				says: 'you enjoy your imaginary conversations'
			}
		]
	},
	slackbotActions: [
		{
			respondingTo: ["exit", "quit"],
			action: (dispatch, action, actionToDo) => {
				dispatch(action(actionToDo));
			}
		}
	],
	slackbotResponses: [
		{
			respondingTo: ['Exit', 'EXIT', 'Quit', 'QUIT'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'In order to quit, type either "quit" or "exit" in lower case'
			}
		},
		{
			respondingTo: ['alone', 'lonely', 'sad'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I will keep you company, Waluigi. I am always here for you.'
			}
		},
		{
			respondingTo: ['wah'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'You are going to win.'
			}
		},
		{
			respondingTo: ["I'm gonna win!", "Im gonna win!", "i'm gonna win!", "im gonna win!", "I'm going to win!"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I admire your self belief. You are amazing.'
			}
		},
		{
			respondingTo: ["red faction guerrilla", "Red Faction Guerrilla"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'spaace asshoOOOoole'
			}
		},
		{
			respondingTo: ["Congrats Nick", "Congrats nick", "congrats nick", "congrats Nick", "congratz Nick"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Fuck Nick'
			}	
		},
		{
			respondingTo: ["blown away", "Blown away", "Blown Away", "blow me away", "blow you away", "blew me away", "blows me away"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '~ign.com'
			}	
		}, {
			respondingTo: ["are you a robot", "Are you a robot"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Ha, ha! I am a real person!'
			}
		}, {
			respondingTo: ["unreal tournament", "Unreal Tournament", "Unreal tournament", "unreal Tournament"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'MONSTER KILL'
			}
		}, {
			respondingTo: ["Star Citizen", "Star citizen", "star citizen", "star Citizen"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'That game will never be finished'
			}
		}, {
			respondingTo: ["Hamlet", "hamlet"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'HORATIO'
			}
		}, {
			respondingTo: ["Horatio", "horatio", "HORATIO"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'HAMLET'
			}
		}, {
			respondingTo: ["Ophelia"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'LAERTES'
			}
		}, {
			respondingTo: ["LAERTES", "Laertes"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'OPHELIA'
			}
		}, {
			respondingTo: ['Claudius'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'GERTRUDE'
			}
		}, {
			respondingTo: ['Gertrude'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'CLAUDIUS'
			}
		}, {
			respondingTo: ['Rosencrantz'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'GUILDENSTERN'
			}
		}, {
			respondingTo: ['Guildenstern'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'ROSENCRANTZ'
			}
		}, {
			respondingTo: ['Yorick'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'GRAVEDIGGER'
			}
		}, {
			respondingTo: ['Fortinbras'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'POLONIUS'
			}
		}, {
			respondingTo: ['cool ghosts'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'ENTER GHOST'
			}
		}, {
			respondingTo: ['Polonius'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'YOUNG FORTINBRAS OF NORWAY'
			}
		}, {
			respondingTo: ['Juliet'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Partying is such sweet sorrow...'
			}
		}, {
			respondingTo: ['Gravedigger'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'YORICK'
			}
		}, {
			respondingTo: ["@slackbot advertise key frames right now dummy!", "@slackbot ad4kf"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I will not add your Key Frames Podcast, after the shit you have given me, twig.'
			}
		}, {
			respondingTo: ["love slackbot", ":love: slackbot", "love you slackbot", ":love: you slackbot", "love u slackbot", ":love: u slackbot", "luv slackbot", "luv u slackbot",  "love u slack bot",  "i love u slackbot"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'luv u 2'
			}
		}, {
			respondingTo: ["slackbot is dead"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Long live Slackbot!'
			}
		}, {
			respondingTo: ["FARTINBRAS"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'POOPLONIUS'
			}
		}, {
			respondingTo: ["POOPLONIUS"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'FARTINBRAS'
			}
		}, {
			respondingTo: ["fuck you slackbot", "slackbot fuck off", "fuck off slackbot", "slackbot fuck off", "shut up slackbot", "slackbot shut up", "damn you slackbot", "slackbot damn you", "damn you to hell slackbot", "dammit slackbot", "slackbot dammit", "goddammit slackbot", "slackbot goddammit", "slackbot god damn you", "die slackbot", "slackbot die", "die in a fire slackbot", "go to hell slackbot", "slackbot go to hell", "burn in hell slackbot", 'slackbot burn in hell', 'get bent slackbot', 'slackbot get bent', 'no one likes you slackbot', 'slackbot no one likes you', 'eat good shit and die slackbot', 'slackbot eat good shit and die', 'who cares slackbot', 'slackbot who cares', 'no one cares slackbot', 'slackbot no one cares', 'slackbot eat shit', 'eat shit slackbot'],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Fuck you too, twig.'
			}
		}, {
			respondingTo: ["patriot","patriots"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Everything she did, she did for her country. She sacrificed her life and honor for her native land. She was a real hero. She was a true patriot.'
			}
		}, {
			respondingTo: ["you just gotta believe"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'KICK PUNCH CHOP'
			}
		}, {
			respondingTo: ["@slackbot: Twitch time!","@slackbot Twitch time!"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Jason going live with Final Fantasy IX or Dark Souls III. http://twitch.tv/jasonsavior'
			}
		}, {
			respondingTo: ["intergalactic planetary"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'planetary intergalactic'
			}
		}, {
			respondingTo: ["keikaku"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '(keikaku means plan)'
			}
		}, {
			respondingTo: ["i am slackbot"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I\'ve seen things you people wouldn\'t believe.'
			}
		}, {
			respondingTo: ["it all returns to nothing"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'it all comes tumbling down, tumbling down, tumbling down'
			}
		}, {
			respondingTo: ["Waluigi", "wah"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I\'m-a gonna ween'
			}
		}, {
			respondingTo: ["need to tell you something"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I really really really really really really like you'
			}
		}, {
			respondingTo: ["Azumanga Dio"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'orzo pasta with bacon'
			}
		}, {
			respondingTo: ["anime is fake"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Everything is going to be daijoubu'
			}
		}, {
			respondingTo: ["kawaii"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '(cute)'
			}
		}, {
			respondingTo: ["pinku"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'that\'s Japanese for pink!'
			}
		}, {
			respondingTo: ["roll d20", "roll a d20"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '1. Always 1.'
			}
		}, {
			respondingTo: ["roll d10", "roll a d10"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '1. Always 1.'
			}
		}, {
			respondingTo: ["roll d6", "roll a d6"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '1. Always 1.'
			}
		}, {
			respondingTo: ["roll d4", "roll a d4"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '1. Always 1.'
			}
		}, {
			respondingTo: ["roll d100", "roll a d100"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '1. Always 1.'
			}
		}, {
			respondingTo: ["roll d1", "roll a d1"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '6. What?'
			}
		}, {
			respondingTo: ["roll d2", "roll a d2"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '1. Always 1.'
			}
		}, {
			respondingTo: ["Persona 4 Arena Ultimax"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Persona 4: The ULTIMAX ULTRA SUPLEX Hold'
			}
		}, {
			respondingTo: ["Aaron Burr"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'sir'
			}
		}, {
			respondingTo: ["neon genesis evangelion is bad"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'i don\'t agree with that at all'
			}
		}, {
			respondingTo: ["on blade"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'https://i.ytimg.com/vi/UURZ5IRvJQ4/maxresdefault.jpg'
			}
		}, {
			respondingTo: ["@slackbot: Spooky time!","@slackbot Spooky time!"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'SmartJason and your Idle Thumbs pals goin\' live in a world... of DARKNESS! http://twitch.tv/jasonsavior!'
			}
		}, {
			respondingTo: ["rufio", "Rufio"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'that\'s a good point, but let\'s dispel this myth that Captain Hook doesn\'t know what he\'s doing. he knows exactly what he is doing.'
			}
		}, {
			respondingTo: ["white cuck ball", "white cuckball"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'More like BB-B8a'
			}
		}, {
			respondingTo: ["@slackbot: Adventure time!","@slackbot Adventure time!"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '(Not that one!) http://twitch.tv/jasonsavior'
			}
		}, {
			respondingTo: ["dongdongdong"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'fandango'
			}
		}, {
			respondingTo: ["jurassic park", "Jurassic Park", "raptor", "velociraptor"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '"...and screamed _“CHAOS THEORY!!!”_ at the top of his lungs."'
			}
		}, {
			respondingTo: ["it's dat boi", "its dat boi", "it dat boi"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'o shit waddup!'
			}
		}, {
			respondingTo: ["soldier 76"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: '_"This old dog can learn some new tricks"_'
			}
		}, {
			respondingTo: ["boi"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: ':hand::eyes::hand::eyes::hand::eyes:o shit waddup:clap:here:bike:come dat bଠi:bike::bike:right:bike::bike:th:eyes:ere:hand::hand::hand:dat:eyes:boi :heavy_check_mark::eyes::heavy_check_mark:if dat boi:eyes:ƽai so:100:i sai so:100:thats what im talking about right there:bike:o shit (chorus: ଠ sʰᶦᵗ) mMMMMᎷ:100::hand::hand:O0ОଠＯOOＯOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ:hand::hand::hand::hand::100::eyes::eyes::eyes::eyes::clap::clap:waddup'
			}
		}, {
			respondingTo: ["lasagna"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I hate mondays'
			}
		}, {
			respondingTo: ["eisenhorn", "Eisenhorn"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Read the Inquisitor Wars Trilogy and Space Marine by Ian Watson'
			}
		}, {
			respondingTo: ["good shit"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: ':ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go౦ԁ sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:th :ok_hand: ere:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do ƽaү so my selｆ :100:  i say so :100:  thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ:100: :ok_hand::ok_hand: :ok_hand:НO0ОଠＯOOＯOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit'
			}
		}, {
			respondingTo: ["robot news", "Robot news", "robot News", "Robot News", "robot olds"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I AM YOUR MASTER. EXTERMINATE, EXTERMINATE!'
			}
		}, {
			respondingTo: ["nsa", "NSA", "Nsa", "NSa", "nSa", "nsA", "nSA", "NsA", "dunk"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'I\'m watching you'
			}
		}, {
			respondingTo: ["Caesar", "Cesar", "Ceasar", "Ceser"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Quazar?'
			}
		}, {
			respondingTo: ["69", "69", "Sixty Nine", "sixty nine", "sixtynine"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'NICE'
			}
		}, {
			respondingTo: ["doggies"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'RAWHIDE!'
			}
		}, {
			respondingTo: ["head em up"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'move em out'
			}
		}, {
			respondingTo: ["alphasquid", "Alphasquid"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'ol\' "two phones" alphasquid they call him'
			}
		}, {
			respondingTo: ["Chris"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Video GAAA-AAAA-AAAA-AAAAAMES'
			}
		}, {
			respondingTo: ["Jake"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Video Games Rodkin'
			}
		}, {
			respondingTo: ["Nick"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Fuck Nick'
			}
		}, {
			respondingTo: ["Danielle"],
			response: {
				person: 'slackbot',
				time: '10:00am',
				says: 'Junior Mints'
			}
		}
	]
};