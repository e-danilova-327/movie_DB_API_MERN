import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import movieRoutes from "./routes/movies.js";
import userRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

app.use(
    express.json({
        limit: "100mb",
        extended: true,
    })
);
app.use(
    express.urlencoded({
        limit: "100mb",
        extended: true,
    })
);

app.use(cors());

//routes
app.use("/movies", movieRoutes);
app.use("/user", userRoutes);

//app.get
app.get("/", (req, res) => {
    res.send("The server works!");
});

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
