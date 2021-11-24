import express from "express";

import {
    getMovies,
    addMovie,
    updateMovie,
    rateMovie,
    deleteMovie,
} from "../controllers/movies.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", auth, addMovie);
router.patch("/:id", auth, updateMovie);
router.patch("/:id/rateMovie", auth, rateMovie);
router.delete("/:id", auth, deleteMovie);

export default router;
