import React, { useState, useEffect } from "react";
import {
    Paper,
    Typography,
    Button,
    TextField,
    Container,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../actions/movies.js";
//import StarRating from "../Movies/MovieCard/StarRating/StarRating.js";

const Form = ({ currentId, setCurrentId }) => {
    const [movieData, setMovieData] = useState({
        title: "",
        year: "",
        genres: "",
        description: "",
        //rating: "",
        poster: "",
    });
    const dispatch = useDispatch();
    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem("profile"));

    const movie = useSelector((state) =>
        currentId
            ? state.movies.find((description) => description._id === currentId)
            : null
    );
    useEffect(() => {
        if (movie) setMovieData(movie);
    }, [movie]);

    const clear = () => {
        setCurrentId(0);
        setMovieData({
            title: "",
            year: "",
            genres: "",
            description: "",
            poster: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(
                addMovie({
                    ...movieData,
                    name: user?.result?.name,
                })
            );
        }
        clear();
    };

    /*return (
        <div>
            <StarRating />
        </div>
    );*/

    return (
        <Container maxWidth="xs">
            <Paper className={classes.paper}>
                <form
                    autoComplete="off"
                    noValidate
                    className={`${classes.root} ${classes.form}`}
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h6">
                        {currentId
                            ? `Editing "${movie.title}"`
                            : "Adding a movie"}
                    </Typography>

                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={movieData.title.toUpperCase()}
                        onChange={(e) =>
                            setMovieData({
                                ...movieData,
                                title: e.target.value,
                            })
                        }
                    />
                    <TextField
                        name="year"
                        variant="outlined"
                        label="Year"
                        fullWidth
                        value={movieData.year}
                        onChange={(e) =>
                            setMovieData({ ...movieData, year: e.target.value })
                        }
                    />
                    <TextField
                        name="genres"
                        variant="outlined"
                        label="Genres (coma separated)"
                        fullWidth
                        value={movieData.genres}
                        onChange={(e) =>
                            setMovieData({
                                ...movieData,
                                genres: e.target.value.split(","),
                            })
                        }
                    />
                    <TextField
                        name="description"
                        variant="outlined"
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={movieData.description}
                        onChange={(e) =>
                            setMovieData({
                                ...movieData,
                                description: e.target.value,
                            })
                        }
                    />

                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                setMovieData({ ...movieData, poster: base64 })
                            }
                        />
                    </div>
                    <Button
                        className={classes.buttonSubmit}
                        variant="contained"
                        size="large"
                        type="submit"
                        fullWidth
                    >
                        Submit
                    </Button>
                    <Button
                        className={classes.buttonClear}
                        variant="contained"
                        size="large"
                        onClick={clear}
                        fullWidth
                    >
                        Clear
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Form;
