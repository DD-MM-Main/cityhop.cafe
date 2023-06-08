import { objectify } from 'radash';

import { Country, type Scene } from '$lib/types';

import { stations } from './stations';

const walks: Omit<Scene, 'type'>[] = [
	{
		name: 'Rome',
		videoID: 'EsFheWkimsU',
		offset: { start: 60 },
		country: Country.italy,
		suggestedTrack: stations['Baroque Classical Radio']
	},
	{
		name: 'Belgrade',
		videoID: 'NGvDS55KeCQ',
		offset: { start: 360, end: -100 },
		country: Country.serbia
	},
	{
		name: 'Cairo',
		videoID: 'Q9cAWThpbbk',
		offset: { start: 60 },
		country: Country.egypt
	},
	{
		name: 'Chicago',
		videoID: 'KXkkKm4AwBg',
		offset: { start: 10 },
		country: Country.us,
		suggestedTrack: stations['Coffee Shop Radio']
	},
	{
		name: 'Kolkata',
		videoID: '7Kzfz86esI0',
		offset: { start: 10 },
		tags: ['day'],
		country: Country.india,
		suggestedTrack: stations['Bollywood Lofi Radio']
	},
	{
		name: 'Singapore',
		videoID: 'aUJl46bEWYo',
		offset: { start: 10 },
		country: Country.singapore,
		tags: ['day']
	},
	{
		name: 'Seattle',
		videoID: 'NaWYnMJA5NE',
		offset: { start: 10 },
		tags: ['day', 'rain'],
		country: Country.us,
		suggestedTrack: stations['Coffee Shop Radio']
	},
	{
		name: 'Amsterdam',
		videoID: 'U40bMk7G2zY',
		offset: { start: 120 },
		tags: ['night'],
		country: Country.netherlands
	},
	{
		name: 'Saint Petersburg',
		videoID: 'KBeCMiUPuic',
		offset: { start: 45 },
		tags: ['day'],
		country: Country.russia
	},
	{
		name: 'Kryvyi Rih',
		videoID: '8LKjoo6FRkg',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.ukraine
	},
	{
		name: 'Lviv',
		videoID: 'DDWAobR8U0c',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.ukraine
	},
	{
		name: 'Moscow',
		videoID: 'e5HZevxkQbs',
		offset: { start: 30 },
		tags: ['day', 'snow'],
		country: Country.russia
	},
	{
		name: 'Brno',
		videoID: 'BGRhCDKz6lQ',
		tags: ['day'],
		offset: { start: 60 },
		country: Country.czechRepublic
	},
	{
		name: 'Cologne',
		videoID: 'mQ2JB1p-DHc',
		tags: ['day'],
		offset: { start: 30 },
		country: Country.germany
	},
	{
		name: 'Frankfurt',
		videoID: '5COC4WMheH0',
		tags: ['day'],
		offset: { start: 30 },
		country: Country.germany
	},
	{
		name: 'Berlin',
		videoID: 'zca688Ecwpk',
		tags: ['day'],
		offset: { start: 300 },
		country: Country.germany
	},
	{
		name: 'Vienna',
		videoID: 'P5oYtWDb8FM',
		tags: ['evening'],
		offset: { start: 60 },
		country: Country.austria
	},
	{
		name: 'Prague',
		videoID: 'oCV8bbM9hk0',
		tags: ['day', 'night'],
		offset: { start: 60 },
		country: Country.czechRepublic
	},
	{
		name: 'Manhattan',
		videoID: 'F8MN0o6RS9o',
		offset: { start: 10 },
		tags: ['snow', 'day'],
		country: Country.us,
		suggestedTrack: stations['Relaxing Jazz Radio']
	},
	{
		name: 'Brooklyn',
		videoID: 'yjR-0TzqGgQ',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Boston',
		videoID: 'JB0A8Me8EKk',
		offset: { start: 10 },
		tags: ['rain', 'day'],
		country: Country.us
	},
	{
		name: 'Montreal',
		videoID: 'NagLUEIvwbg',
		offset: { start: 200 },
		tags: ['snow', 'day'],
		country: Country.canada
	},
	{
		name: 'Kochi',
		videoID: '4YKjcbVUkP0',
		tags: ['day', 'rain'],
		country: Country.india,
		suggestedTrack: stations['Bollywood Lofi Radio']
	},
	{
		name: 'Dubai',
		videoID: '8uvs5qEBQoE',
		tags: ['night'],
		country: Country.uae
	},
	{
		name: 'Yokohama',
		videoID: 'm6y03y_9ruA',
		tags: ['snow', 'night'],
		country: Country.japan
	},
	{
		name: 'Kyoto',
		videoID: 'qgfd-uWTVwg',
		offset: { start: 50 },
		tags: ['rain', 'night'],
		country: Country.japan
	},
	{
		name: 'Shibuya',
		videoID: 'b3yQXprMj3s',
		offset: { start: 45 },
		tags: ['day'],
		country: Country.japan
	},
	{
		name: 'Osaka',
		videoID: 'm65NkIAIMSw',
		offset: { start: 10 },
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'Bern',
		videoID: 'HG-IIit3ubs',
		offset: { start: 30 },
		tags: ['snow', 'day'],
		country: Country.switzerland
	},
	{
		name: 'Zermatt',
		videoID: 'LFOx-vmYrts',
		offset: { start: 30 },
		tags: ['day', 'rain'],
		country: Country.switzerland
	},
	{
		name: 'Lauterbrunnen',
		videoID: 'Bq4rmeIvJbs',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.switzerland
	},
	{
		name: 'Zürich',
		videoID: 'mEuj3Ye9QDw',
		offset: { start: 60 },
		tags: ['day'],
		country: Country.switzerland
	},
	{
		name: 'Tokyo',
		videoID: 'VqS9_CIm64E',
		offset: { start: 100 },
		tags: ['night', 'rain'],
		country: Country.japan
	},
	{
		name: 'Oimachi',
		videoID: 'mzVmieBKwKk',
		offset: { start: 30 },
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'London',
		videoID: 'H43glfbQEh4',
		tags: ['day', 'rain'],
		offset: { start: 60 },
		country: Country.uk
	},
	{
		name: 'Oxford',
		videoID: 'D1KsEOUqCEU',
		tags: ['day', 'fog'],
		offset: { start: 30 },
		country: Country.uk
	},
	{
		name: 'Accra',
		videoID: 'x0rM132jMR8',
		tags: ['day'],
		country: Country.ghana
	},
	{
		name: 'Los Angeles',
		videoID: 'VINOSu5y4ic',
		offset: { start: 60 },
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Venice Beach',
		videoID: '8TuFDJDm_18',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Barcelona',
		videoID: '__civ2E9A4g',
		tags: ['day', 'night'],
		offset: { start: 30 },
		country: Country.spain
	},
	{
		name: 'Mexico City',
		videoID: 'UDFaRy9UH4Q',
		tags: ['day'],
		offset: { start: 30 },
		country: Country.mexico
	},
	{
		name: 'Madrid',
		videoID: 'TXH5eGF2COk',
		tags: ['day'],
		offset: { start: 30 },
		country: Country.spain
	},
	{
		name: 'Paris',
		videoID: '3j-AVL3Pr3w',
		offset: { start: 30 },
		suggestedTrack: stations['Paris Cafe Radio: Positive Bossa Nova Jazz Music'],
		tags: ['night', 'evening'],
		country: Country.france
	},
	{
		name: 'Cinque Terre',
		videoID: 'FmNNrCJUhac',
		offset: { start: 10 },
		tags: ['rain', 'evening'],
		country: Country.italy
	},
	{
		name: 'Naples',
		videoID: 'Ypq4N3EldBM',
		offset: { start: 5 },
		tags: ['day', 'rain'],
		country: Country.italy
	},
	{
		name: 'Venice',
		videoID: 'kccv6YJZ0P4',
		offset: { start: 50 },
		tags: ['evening'],
		suggestedTrack: stations['Baroque Classical Radio'],
		country: Country.italy
	},
	{
		name: 'Beijing',
		videoID: '7keLrzMcZRc',
		offset: { start: 2058 },
		tags: ['night', 'evening'],
		country: Country.china
	},
	{
		name: 'Ningbo',
		videoID: 'JcxscDzP4Oc',
		offset: { start: 120 },
		tags: ['night', 'day'],
		country: Country.china
	},
	{
		name: 'Wuhan',
		videoID: 'wVHgby6hBDA',
		offset: { start: 2058 },
		suggestedTrack: stations['Classical Chinese Radio'],
		tags: ['night', 'day'],
		country: Country.china
	},

	{
		name: 'Chongqing',
		videoID: 'tMzCwwvHwN0',
		offset: { start: 86 },
		tags: ['night'],
		suggestedTrack: stations['Classical Chinese Radio'],
		country: Country.china
	},
	{
		name: 'Guangzhou',
		videoID: 'oC0PYbNmSrk',
		tags: ['night', 'rain'],
		country: Country.china
	},
	{
		name: 'Shanghai',
		videoID: 'oBu3Mtr6nGs',
		offset: { start: 86 },
		tags: ['night', 'rain'],
		country: Country.china
	},
	{
		name: 'Xiangtan',
		videoID: 'MudeUxLjqEY',
		offset: { start: 86 },
		tags: ['rain', 'night'],
		country: Country.china
	},
	{
		name: 'Myeongdong',
		videoID: 'nR9dvyAf-DY',
		offset: { start: 30 },
		tags: ['evening'],
		country: Country.korea
	},
	{
		name: 'Euljiro',
		videoID: 'g010nClpG2U',
		offset: { start: 60 },
		tags: ['morning', 'rain'],
		country: Country.korea
	},
	{
		name: 'Hongdae',
		videoID: 's50yml_9LPA',
		offset: { start: 30 },
		tags: ['evening', 'night'],
		country: Country.korea
	},
	{
		name: 'Daegu',
		videoID: 'S5xSOjAjCX0',
		offset: { start: 260 },
		tags: ['night', 'evening'],
		country: Country.korea
	},
	{
		name: 'Incheon',
		videoID: '9eLtj6KqqaM',
		offset: { start: 30 },
		tags: ['night', 'evening'],
		country: Country.korea
	},
	{
		name: 'Yeosu City',
		videoID: 'NV-7yREq7DA',
		offset: { start: 60 },
		tags: ['evening'],
		country: Country.korea
	},
	{
		name: 'Yongsan Station',
		videoID: 'jxQX5XI766c',
		offset: { start: 235 },
		tags: ['night', 'rain'],
		country: Country.korea
	},
	{
		name: 'Bukchon',
		videoID: 'nLx03XgG8AY',
		tags: ['night', 'snow'],
		country: Country.korea
	},
	{
		name: 'Dream Forest',
		videoID: 'zCamdbpzJEs',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.korea
	},
	{
		name: 'Majang Lake Trail',
		videoID: 'd12qNTbfvfo',
		offset: { start: 30 },
		tags: ['snow', 'day'],
		country: Country.korea
	},
	{
		name: 'Yanghwa Bridge',
		videoID: 'wdCWLtJ339U',
		offset: { start: 30 },
		tags: ['night', 'rain'],
		country: Country.korea
	},
	{
		name: 'Gangnam',
		videoID: 'EJJ8rmIWUcQ',
		offset: { start: 60 },
		tags: ['day', 'rain'],
		country: Country.korea
	},
	{
		name: 'Portland',
		videoID: 'Ht747Q-PLDY',
		tags: ['rain', 'day'],
		offset: { start: 60 },
		country: Country.us
	},
	{
		name: 'Bangkok',
		videoID: 'ol-IOOBs4oY',
		tags: ['night'],
		offset: { start: 80 },
		country: Country.thailand
	},
	{
		name: 'Honolulu',
		videoID: 'T3nzPsDfazA',
		tags: ['evening'],
		offset: { start: 30 },
		country: Country.us
	},
	{
		name: 'Koh Kut Island',
		videoID: 'RfVZMCCeAzI',
		offset: { start: 300 },
		country: Country.thailand,
		tags: ['day']
	},
	{
		name: 'Edinburgh',
		videoID: 'o9aH4xk25yg',
		offset: { start: 30 },
		country: Country.scotland,
		tags: ['day', 'night', 'rain']
	},
	{
		name: 'New Orleans',
		videoID: '3BAahFrNRaI',
		offset: { start: 30 },
		country: Country.us,
		tags: ['day'],
		suggestedTrack: stations['Work & Jazz Piano Radio']
	},
	{
		name: 'Ho Chi Minh City',
		videoID: 'SmmquqDceus',
		tags: ['night'],
		offset: { start: 120 },
		country: Country.vietnam
	},
	{
		name: 'Vancouver',
		videoID: 'jmok5F9RQ_w',
		offset: { start: 120 },
		tags: ['day'],
		country: Country.canada
	},
	{
		name: 'Mumbai',
		videoID: '8W4ZTX1z02E',
		offset: { start: 120 },
		tags: ['day', 'night'],
		suggestedTrack: stations['Bollywood Lofi Radio'],
		country: Country.india
	},
	{
		name: 'Gwangju',
		videoID: 'pg9cq7QlEYI',
		tags: ['night', 'snow'],
		country: Country.korea
	},
	{
		name: 'Tsawwassen',
		videoID: 'kg2kefbrFn4',
		tags: ['evening'],
		offset: { start: 10 },
		country: Country.canada
	},
	{
		name: 'Beirut',
		videoID: 'KMDWEwQDoc0',
		tags: ['evening'],
		offset: { start: 10 },
		country: Country.lebanon
	},
	{
		name: 'Lima',
		videoID: 'e4RsX2h2QIc',
		tags: ['day'],
		offset: { start: 60 },
		country: Country.peru
	},
	{
		name: 'Nagasaki',
		videoID: 'Wey4zHA4nPg',
		tags: ['night', 'rain'],
		offset: { start: 30 },
		country: Country.japan
	},
	{
		name: 'Cusco',
		videoID: 'BqBPCNyK5ZM',
		tags: ['day'],
		offset: { start: 60 },
		country: Country.peru
	}
];

const mappedWalks = walks.map((scene) => ({ ...scene, type: 'walk' })) as Scene[];

export default mappedWalks;

export const walkMap = objectify(mappedWalks, (walk) => walk.videoID);
