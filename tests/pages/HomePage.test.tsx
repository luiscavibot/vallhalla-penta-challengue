import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/pages/HomePage';
import React from 'react';
import { useFecthMovies } from '../../src/hooks/useFecthMovies';
import { jest } from '@jest/globals';

jest.mock('../../src/hooks/useFecthMovies');

describe('Pruebas en <PrincipalPage />', () => {
	test('Debe de mostrar un loading al inicio', () => {
		useFecthMovies.mockReturnValue({
			movies: [],
			isLoading: true,
		});
		render(<HomePage />);
		expect(screen.getByRole('progressbar'));
	});
	test('Debe de mostrar una lista de peliculas', () => {
		useFecthMovies.mockReturnValue({
			movies: [
				{
					id: 'tt0111161',
					rank: '1',
					title: 'The Shawshank Redemption',
					fullTitle: 'The Shawshank Redemption (1994)',
					year: '1994',
					image: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg',
					crew: 'Frank Darabont (dir.), Tim Robbins, Morgan Freeman',
					imDbRating: '9.2',
					imDbRatingCount: '2608426',
				},
			],
			isLoading: false,
		});
		render(<HomePage />);
		expect(screen.getByText('The Shawshank Redemption'));
	});
});
