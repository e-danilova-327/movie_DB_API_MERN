import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Card, CardContent, Button } from "@material-ui/core";
import useStyles from "./styles.js";

const StarRating = ({ handleClose }) => {
    const classes = useStyles();
    const [rating, setRating] = useState(4); //initial rating value
    let ratings = []; //array to store rating values

    const handleRating = (rate) => {
        setRating(rate);
        ratings.push(rate);
        console.log(`Your rate is: ${rate}`);
        console.log(ratings);
        // Some more logic after rate
        return (ratings = [...ratings, rate]);
        // calculate the average rating
        let sum = 0;
        for (let i = 0; i < ratings.length; i++) {
            sum += ratings[i];
        }
        let avg = sum / ratings.length;
        console.log(`Average rating is: ${avg}`);
    };

    /*const handleRating = (newRating) => {
        setRating(newRating);
        let ratingValue = newRating;
        // array with all the rates given by the user
        let ratingArray = [];
        // adding new rating to the array
        ratingArray.push(ratingValue);
        console.log(ratingArray);
        // calculating the average of the rates
        let sum = 0;
        for (let i = 0; i < ratingArray.length; i++) {
            sum += ratingArray[i];
        }
        let avg = sum / ratingArray.length;
        console.log(avg);
        return avg;
    };*/

    return (
        <Card className={classes.ratingCard}>
            <CardContent className={classes.ratingCard}>
                <Rating
                    emptySymbol={<i className="fa fa-star-o fa-2x" />}
                    fullSymbol={<i className="fa fa-star fa-2x" />}
                    onClick={handleRating}
                    ratingValue={rating}
                    stars={10}
                    readonly={false}
                />

                <Button
                    size="small"
                    className={classes.ratingButton}
                    onClick={handleClose}
                    variant="contained"
                >
                    Rate
                </Button>
            </CardContent>
        </Card>
    );
    /*
    // Catch rating value
    const handleRating = (newRating) => {
        setRating(newRating);

    };

    return (
        <div>
            <Rating onClick={handleRating} ratingValue={rating} />
            <RatingView ratingValue={2} />
        </div>
    );*/
};

export default StarRating;
