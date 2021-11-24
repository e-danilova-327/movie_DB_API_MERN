import jwt from "jsonwebtoken";

//user wants to add a movie or to rate an existing one, so he must authenticate first

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, "test"); //process.env.JWT_SECRET

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }
        console.log(decodedData);
        console.log(req.userId);
        console.log(token);
        console.log(`Success!`);
        next();
    } catch (error) {
        res.status(401).json({ message: "Please authenticate." });
    }
};

export default auth;
