import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    creator: String,
    title: String,
    year: Number,
    name: String,
    genres: [String],
    description: String,
    poster: String,
    ratings: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const MovieMessage = mongoose.model("MovieMessage", movieSchema);

export default MovieMessage;
