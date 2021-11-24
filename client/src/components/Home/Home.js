//https://www.freepik.com/free-vector/close-up-black-marble-background_3413197.htm
//https://www.freepik.com/free-photo/slate-texture-background_4037913.htm
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";

import Movies from "../Movies/Movies.js";

import { getMovies } from "../../actions/movies.js";

const Home = ({ currentId, setCurrentId }) => {
    const [rating, setRating] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [currentId, dispatch]);

    return (
        <Grid
            container
            //className={classes.mainContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
        >
            <Grid item xs={12} sm={12}>
                <Movies rating={rating} />
            </Grid>
        </Grid>
    );
};

export default Home;
