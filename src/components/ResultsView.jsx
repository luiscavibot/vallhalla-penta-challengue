import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { DataCard } from './DataCard';
import { sliceMoviesArray } from '../helpers/SliceMoviesArray';

export const ResultsView = ({ movies, page }) => {
	let moviesSlice = sliceMoviesArray(movies, page);
	return (
		<Grid container spacing={2}>
			{moviesSlice.map((movie) => (
				<Grid item xs={12} sm={6} md={3} key={movie.id}>
					<DataCard movie={movie} />
				</Grid>
			))}
		</Grid>
	);
};

export default ResultsView;
ResultsView.propTypes = {
	movies: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
};
