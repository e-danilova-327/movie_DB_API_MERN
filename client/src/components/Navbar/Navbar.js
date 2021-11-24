import React, { useState, useEffect } from "react";
import {
    Typography,
    Avatar,
    AppBar,
    Toolbar,
    Button,
    Tooltip,
} from "@material-ui/core";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import movies from "../../images/movie.jpg";
import useStyles from "./styles.js";

const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );

    const logout = () => {
        dispatch({ type: "LOGOUT" });

        navigate("/");

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static">
            <div className={classes.brandContainer}>
                <img src={movies} alt="movies" height="100" />
                <Typography
                    className={classes.heading}
                    component={Link}
                    to="/"
                    variant="h2"
                    align="center"
                >
                    Movies
                </Typography>
            </div>
            <Toolbar>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Button component={Link} to="/new">
                            <AddBoxIcon
                                fontSize="large"
                                className={classes.icon}
                            />
                        </Button>
                        <Avatar
                            className={classes.red}
                            alt={user?.result.name}
                            src={user?.result.imageUrl}
                        >
                            {user?.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user?.result.name}
                        </Typography>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            onClick={logout}
                        >
                            LOGOUT
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button component={Link} to="/auth">
                            <Tooltip
                                arrow
                                className={classes.tooltip}
                                title="Can't find a movie or a series? Sign in to create it."
                            >
                                <AddBoxIcon
                                    fontSize="large"
                                    className={classes.icon}
                                />
                            </Tooltip>
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.button}
                            component={Link}
                            to="/auth"
                        >
                            SIGN IN
                        </Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
