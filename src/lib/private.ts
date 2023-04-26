import { Country, type Background } from './types';

export const _tracks = {
	hindiLofi: {
		name: 'Indian Lofi',
		trackID: 'c__Br1xUVK8'
	},
	koreanRB: {
		trackID: 'IUT1qAhMY4w',
		name: 'Korean R&B'
	},
	chillBeats: {
		name: 'Chill Beats to Study/Relax To',
		trackID: 'jfKfPfyJRdk'
	},
	cityPop: {
		name: 'warm nights in tokyo [ city pop シティ・ポップ ]',
		trackID: 'uUGJpJuwCY4'
	},
	jazz: {
		name: 'Rainy Jazz',
		trackID: 'Dx5qFachd3A'
	},
	chineseClassical: {
		name: 'Chinese Classical',
		trackID: 'lL6rDj40NZk'
	},
	synthHop: {
		name: 'synthwave radio 🌌 - beats to chill/game to',
		trackID: 'MVPTGNGiI-4'
	}
};

export const _backgrounds: Record<Country, Background[]> = {
	[Country.us]: [
		{
			name: 'Chicago',
			videoID: 'KXkkKm4AwBg',
			type: 'walk',
			offset: 10,
			suggestedTrack: _tracks.jazz
		},
		{
			name: 'Miami',
			videoID: 'Cod_ggrs69U',
			offset: 48,
			type: 'drive',
			tags: ['night'],
			suggestedTrack: _tracks.synthHop
		}
	],
	[Country.india]: [
		{
			name: 'New Delhi',
			videoID: '-bF43jowdps',
			offset: 28,
			type: 'walk',
			tags: ['night'],
			suggestedTrack: _tracks.hindiLofi
		},
		{
			name: 'Mumbai',
			videoID: '0UWkt9BgkXQ',
			type: 'walk',
			tags: ['night'],
			suggestedTrack: _tracks.hindiLofi
		}
	],
	[Country.japan]: [
		{
			name: 'Yokohama',
			videoID: 'm6y03y_9ruA',
			type: 'walk',
			tags: ['snow', 'night']
		},
		{
			name: 'Osaka',
			videoID: 'm65NkIAIMSw',
			offset: 10,
			type: 'walk',
			tags: ['night']
		},
		{
			name: 'Tokyo',
			videoID: 'VqS9_CIm64E',
			offset: 100,
			type: 'walk',
			tags: ['night', 'rain']
		},
		{
			name: 'Tokyo',
			videoID: 'GPbBZCrQbzI',
			type: 'drive',
			tags: ['day'],
			suggestedTrack: _tracks.cityPop
		}
	],
	[Country.italy]: [
		{
			name: 'Cinque Terre',
			videoID: 'FmNNrCJUhac',
			offset: 10,
			type: 'walk',
			tags: ['rain', 'evening']
		}
	],
	[Country.china]: [
		{
			name: 'Beijing',
			videoID: '7keLrzMcZRc',
			offset: 2058,
			type: 'walk',
			tags: ['night', 'evening']
		},
		{
			name: 'Hangzhou',
			videoID: 'jAe290vn-gk',
			offset: 200,
			type: 'drive',
			tags: ['day', 'rain']
		},
		{
			name: 'Chongqing',
			videoID: 'tMzCwwvHwN0',
			offset: 86,
			tags: ['night'],
			type: 'walk',
			suggestedTrack: _tracks.chineseClassical
		},
		{
			name: 'Guangzhou',
			videoID: 'oC0PYbNmSrk',
			tags: ['night', 'rain'],
			type: 'walk'
		},
		{
			name: 'Shanghai',
			videoID: 'oBu3Mtr6nGs',
			offset: 86,
			type: 'walk',
			tags: ['night', 'rain']
		},
		{
			name: 'Xiangtan',
			videoID: 'MudeUxLjqEY',
			offset: 86,
			type: 'walk',
			tags: ['rain', 'night']
		}
	],
	[Country.korea]: [
		{
			name: 'Myeongdong',
			videoID: 'i1KRgqkr3fU',
			tags: ['evening'],
			type: 'walk',
			suggestedTrack: _tracks.koreanRB
		},
		{
			name: 'Korea',
			videoID: 'KGAIumGxQeY',
			tags: ['evening'],
			type: 'drive',
			suggestedTrack: _tracks.koreanRB
		},
		{
			name: 'Yongsan Station',
			videoID: 'jxQX5XI766c',
			offset: 235,
			type: 'walk',
			tags: ['night', 'rain']
		},
		{
			name: 'Bukchon',
			videoID: 'nLx03XgG8AY',
			type: 'walk',
			tags: ['night', 'snow']
		},
		{
			name: 'Gwangju',
			videoID: 'pg9cq7QlEYI',
			type: 'walk',
			tags: ['night', 'snow']
		}
	]
};
