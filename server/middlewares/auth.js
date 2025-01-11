const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
   try {
    const token = await req.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
   } catch (error) {
    res.status(401).json({
        error: new Error("Invalid request!"),
    })
   }
}