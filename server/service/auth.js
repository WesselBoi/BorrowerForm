const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const secret = process.env.JWT_SECRET;

function setUser(user){
    return jwt.sign({
        _id : user._id,
        username: user.username,
        email: user.email
    } , secret)
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token , secret)
}

module.exports = {
    setUser,
    getUser
};
// This code provides functions to set and get user information using JWT (JSON Web Tokens).
// The `setUser` function creates a JWT token for a user object, while the `getUser` function retrieves user information from a token.