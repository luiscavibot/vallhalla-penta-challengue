import { useEffect, useState } from 'react';
import { getMovies } from '../helpers/getMovies';

export const useFecthMovies = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getMoviesData = async () => {
		const moviesData = await getMovies();
		setMovies(moviesData);
		setIsLoading(false);
	};

	useEffect(() => {
		getMoviesData();
	}, []);

	return {
		movies,
		isLoading,
	};
};
