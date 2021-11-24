import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

//Password hashing function
/*export const passwordHash = async (password, saltRounds) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        console.log(err);
    }
    return null;
};*/

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({
                message: "User not found, please check the email",
            });
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }
        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            "test",
            { expiresIn: "1h" }
        );
        return res.status(200).json({
            message: "User logged in",
            result: existingUser,
            token,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const signup = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        if (password !== confirmPassword)
            return res.status(400).json({
                message: "Passwords don't match",
            });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
        });

        const token = jwt.sign(
            {
                email: result.email,
                id: result._id,
            },
            "test",
            { expiresIn: "1h" }
        );

        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
