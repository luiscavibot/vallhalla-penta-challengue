import { VITE_API_KEY_IMBD, VITE_API_URL_IMBD } from '../constants/config';

export const getMovies = async () => {
	const apiKey = VITE_API_KEY_IMBD;
	const apiUrl = VITE_API_URL_IMBD;

	const url = `${apiUrl}/${apiKey}`;
	const response = await fetch(url);
	const { items } = await response.json();
	const data = items.map((item) => ({
		id: item.id,
		rank: item.rank,
		title: item.title,
		crew: item.crew,
		image: item.image,
		year: item.year,
		imDbRating: item.imDbRating,
	}));
	return data;
};
