import { getMovies } from '../../src/helpers/getMovies';

describe('Pruebas en getMovies', () => {
	test('Debe retornar un arreglo de 250 ítems', async () => {
		const movies = await getMovies();
		expect(movies.length).toBe(250);
		expect(movies[0]).toEqual({
			id: expect.any(String),
			rank: expect.any(String),
			title: expect.any(String),
			crew: expect.any(String),
			image: expect.any(String),
			year: expect.any(String),
			imDbRating: expect.any(String),
		});
	});
});
