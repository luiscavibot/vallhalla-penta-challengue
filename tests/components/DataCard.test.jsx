import { render, screen } from '@testing-library/react';
import { DataCard } from '../../src/components/DataCard';

describe('Pruebas en <DataCard />', () => {
	const movie = {
		id: 'tt0111161',
		rank: '1',
		title: 'The Shawshank Redemption',
		fullTitle: 'The Shawshank Redemption (1994)',
		year: '1994',
		image: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg',
		crew: 'Frank Darabont (dir.), Tim Robbins, Morgan Freeman',
		imDbRating: '9.2',
		imDbRatingCount: '2608426',
	};
	test('Debe hacer match con el snapshot', () => {
		const { container } = render(<DataCard movie={movie} />);
		expect(container).toMatchSnapshot();
	});
	test('Debe tener una etiqueta img con un src igual a image y un alt igual al title del objeto', () => {
		render(<DataCard movie={movie} />);
		const { src, alt } = screen.getByAltText(movie.title);
		expect(src).toBe(movie.image);
		expect(alt).toBe(movie.title);
	});
});
