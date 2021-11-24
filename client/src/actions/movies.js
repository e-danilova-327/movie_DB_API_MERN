import * as api from "../api/index.js";
import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    RATE,
    DELETE,
} from "../constants/actionTypes.js";

//Action creators
export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.getMovies();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

/*export const addMovie = (movie) => async (dispatch) => {
    try {
        const { data } = await api.addMovie(movie);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};*/

export const addMovie = (movie) => async (dispatch) => {
    try {
        const { data } = await api.addMovie(movie);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
    console.log(movie);
};

export const updateMovie = (id, movie) => async (dispatch) => {
    try {
        const { data } = await api.updateMovie(id, movie);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const rateMovie = (id) => async (dispatch) => {
    try {
        const { data } = await api.rateMovie(id);

        dispatch({ type: RATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteMovie = (id) => async (dispatch) => {
    try {
        await api.deleteMovie(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};
