import { MOVIES_NUMBER_MAX, MOVIES_PER_PAGE } from '../../src/constants/config';
import { sliceMoviesArray } from '../../src/helpers/SliceMoviesArray';

describe('Pruebas en sliceMoviesArray', () => {
	const movies = new Array(MOVIES_NUMBER_MAX);
	movies.fill('_');
	const page = 1;
	test("Debe retornar un arreglo de 'MOVIES_PER_PAGE' ítems a partir de un arreglo de 'MOVIES_NUMBER_MAX' ítems", () => {
		const newArrayMovies = sliceMoviesArray(movies, page);
		expect(newArrayMovies.length).toBe(MOVIES_PER_PAGE);
	});
});
