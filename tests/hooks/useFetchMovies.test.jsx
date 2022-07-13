import { renderHook, waitFor } from '@testing-library/react';
import { useFecthMovies } from '../../src/hooks/useFecthMovies';

describe('Pruebas en el hook useFecthMovies', () => {
	test('Debe retornar el estado inicial', () => {
		const { result } = renderHook(() => useFecthMovies());
		const { movies, isLoading } = result.current;
		expect(movies.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});
	test('Debe retornar un arreglo de películas y isLoading en false', async () => {
		const { result } = renderHook(() => useFecthMovies());
		await waitFor(() =>
			expect(result.current.movies.length).toBeGreaterThan(0)
		);
		const { movies, isLoading } = result.current;
		expect(movies.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
