import { MOVIES_PER_PAGE } from '../constants/config';

export const sliceMoviesArray = (movies, page) => {
	return movies.slice((page - 1) * MOVIES_PER_PAGE, page * MOVIES_PER_PAGE);
};
