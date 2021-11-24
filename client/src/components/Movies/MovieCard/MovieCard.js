import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
    Collapse,
    Tooltip,
    Backdrop,
} from "@material-ui/core";

import moment from "moment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
//import Rating from "@mui/material/Rating";
//import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import useStyles from "./styles.js";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { deleteMovie } from "../../../actions/movies.js";
import { useDispatch } from "react-redux";
//import { rateMovie } from "../../../api/index.js";
import StarRating from "./StarRating/StarRating.js";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const MovieCard = ({ movie, rating }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //let rates = [];
    /*const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = rating.reduce(reducer, 0);
    let avgRating = sum / rating.length;*/

    return (
        <Card className={classes.card}>
            <div className={classes.overlayName}>
                <Typography variant="body2">
                    {moment(movie.createdAt).fromNow()}
                </Typography>
            </div>
            <CardMedia
                component="img"
                alt={movie.title}
                image={movie.poster}
                title={movie.title}
            />
            <Typography
                className={classes.title}
                variant="h5"
                align="center"
                gutterBottom
                style={{ fontWeight: "bold" }}
            >
                {movie.title}
            </Typography>
            <CardActions className={classes.cardActions}>
                <div className={classes.cardActions}>
                    <StarIcon style={{ color: "#ffab00" }} />
                    <Typography style={{ color: "#ffffff" }}>
                        avgRating.toFixed(1)
                    </Typography>
                </div>
                <div>
                    <ExpandMore
                        expand={expanded}
                        style={{ color: "#ffffff" }}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </div>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography
                        className={classes.details}
                        variant="body2"
                        color="textSecondary"
                    >
                        {movie.year}
                    </Typography>
                    <Typography className={classes.details} variant="body2">
                        {movie.genres.map((genre) => `#${genre} `)}
                    </Typography>
                    <Typography
                        className={classes.details}
                        variant="body2"
                        component="p"
                        gutterBottom
                    >
                        {movie.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button
                        disabled={!user?.result}
                        size="small"
                        style={{
                            color: "#ffffff",
                            fontWeight: "bold",
                        }}
                        onClick={handleToggle}
                    >
                        <Tooltip
                            arrow
                            className={classes.tooltip}
                            title="Rate movie"
                        >
                            <StarIcon style={{ color: "#ffab00" }} />
                        </Tooltip>
                    </Button>
                    <Backdrop
                        className={classes.rating}
                        sx={{
                            color: "#fff",
                        }}
                        open={open}
                    >
                        <StarRating handleClose={handleClose} color="inherit" />
                    </Backdrop>

                    <Button
                        disabled={!user?.result}
                        size="small"
                        style={{
                            color: "#ffffff",
                            fontWeight: "bold",
                        }}
                        onClick={() => dispatch(deleteMovie(movie._id))}
                    >
                        <Tooltip
                            arrow
                            className={classes.tooltip}
                            title="Delete movie"
                        >
                            <DeleteOutlineOutlinedIcon
                                fontSize="medium"
                                style={{ color: "#ffab00" }}
                            />
                        </Tooltip>
                    </Button>
                </CardActions>
            </Collapse>
        </Card>
    );
};

export default MovieCard;
