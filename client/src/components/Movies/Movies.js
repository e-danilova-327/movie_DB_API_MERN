import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import MovieCard from "./MovieCard/MovieCard.js";
import { useSelector } from "react-redux";
import useStyles from "./styles.js";

const Movies = ({ rating }) => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();

    return !movies.length ? (
        <CircularProgress className={classes.progress} />
    ) : (
        <Grid
            container
            spacing={3}
            alignItems="stretch"
            className={classes.grid}
        >
            {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={3} key={movie._id}>
                    <MovieCard rating={rating} movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Movies;
