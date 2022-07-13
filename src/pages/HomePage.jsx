import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFecthMovies } from '../hooks/useFecthMovies';
import { Divider } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MOVIES_NUMBER_MAX, MOVIES_PER_PAGE } from '../constants/config';
import { ResultsView } from '../components/ResultsView';

export const HomePage = () => {
	const { movies, isLoading } = useFecthMovies();
	const maxPage = parseInt((MOVIES_NUMBER_MAX / MOVIES_PER_PAGE).toFixed(0));
	const [page, setPage] = useState(1);
	const handleChange = (event, value) => {
		setPage(value);
	};
	return (
		<Container>
			<Stack spacing={3}>
				<Typography variant="h3" color="primary" align="center">
					TOP 250 MOVIES
				</Typography>
				<Divider variant="middle" />
				{!isLoading ? (
					<>
						<Grid container justifyContent="center">
							<Grid item>
								<Pagination
									count={maxPage}
									page={page}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>

						<ResultsView movies={movies} page={page} />
					</>
				) : (
					<Grid container justifyContent="center">
						<Grid item>
							<CircularProgress size="140px" />
						</Grid>
					</Grid>
				)}

				<br />
			</Stack>
		</Container>
	);
};
