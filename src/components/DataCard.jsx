import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

export const DataCard = ({ movie }) => {
	return (
		<Card
			sx={{
				height: '100%',
			}}>
			<CardMedia component="img" image={movie.image} alt={movie.title} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{movie.title}
				</Typography>

				<Typography variant="subtitle2">{movie.crew}</Typography>
				<Typography variant="body2" color="text.secondary">
					Crew
				</Typography>

				<Typography variant="subtitle2">{movie.year}</Typography>
				<Typography variant="body2" color="text.secondary">
					Year
				</Typography>

				<Typography variant="subtitle2">{movie.rank}</Typography>
				<Typography variant="body2" color="text.secondary">
					Rank
				</Typography>

				<Rating
					size="small"
					name="read-only"
					value={movie.imDbRating * 0.5}
					readOnly
					precision={0.2}
				/>
				<Typography variant="body2" color="text.secondary">
					ImDb Rating
				</Typography>
			</CardContent>
		</Card>
	);
};
DataCard.propTypes = {
	movie: PropTypes.object.isRequired,
};
