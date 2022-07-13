import { render, screen } from '@testing-library/react';
import ResultsView from '../../src/components/ResultsView';

describe('Pruebas en <ResultsView />', () => {
	const movies = [
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
	];
	const page = 1;
	test('Debe hacer match con el snapshot', () => {
		const { container } = render(
			<ResultsView movies={movies} page={page} />
		);
		expect(container).toMatchSnapshot();
	});
});
