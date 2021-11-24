import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000", // "https://movied-dbapp.herokuapp.com",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export const getMovies = () => API.get("/movies");
export const addMovie = (newMovie) => API.post("/movies", newMovie);
export const updateMovie = (id, updatedMovie) =>
    API.patch(`/movies/${id}`, updatedMovie);
export const rateMovie = (id) => API.patch(`/movies/${id}/rateMovie`);
export const deleteMovie = (id) => API.delete(`/movies/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
