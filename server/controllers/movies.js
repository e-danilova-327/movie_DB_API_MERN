import express from "express";
import mongoose from "mongoose";

import MovieMessage from "../models/movieMessage.js";

export const getMovies = async (req, res) => {
    try {
        const movieMessages = await MovieMessage.find();

        res.status(200).json(movieMessages);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const addMovie = async (req, res) => {
    const movie = req.body;

    const newMovieMessage = new MovieMessage({
        ...movie,
        creator: req.userId,
        createdAt: new Date().toISOString(),
    });

    try {
        await newMovieMessage.save();

        res.status(201).json(newMovieMessage);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};

export const updateMovie = async (req, res) => {
    const { id: _id } = req.params;
    const movie = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({ message: "No movie with such ID" });
    }

    const updatedMovie = await MovieMessage.findByIdAndUpdate(
        _id,
        { ...movie, _id },
        { new: true }
    );

    res.json(updatedMovie);
};

//export const rateMovie
//rate movie
export const rateMovie = async (req, res) => {
    const { id: _id } = req.params;

    if (!req.userId)
        return res.json({ message: "You must be logged in to rate a movie" });

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({ message: "No movie with such ID" });
    }

    const movie = await MovieMessage.findById(_id);

    const index = movie.ratings.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        //rate the movie
        movie.ratings.push(req.userId);
        movie.rating = movie.ratings.length;
    } else {
        //unrate the movie
        movie.ratings.splice(index, 1);
        movie.rating = movie.ratings.length;
    }

    const updatedMovie = await MovieMessage.findByIdAndUpdate(_id, movie, {
        new: true,
    });

    res.json(updatedMovie);
};

export const deleteMovie = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({ message: "No movie with such ID" });
    }

    await MovieMessage.findByIdAndDelete(_id);

    res.json({ message: "The movie has been deleted successfully" });
};
