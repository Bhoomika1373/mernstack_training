const jwt = require('jsonwebtoken');

// Define a secret key (in a real application, store this securely)
const secretKey ="124";

username="bhoomika"

// Sign the token
const token = jwt.sign(username, secretKey);
const final=jwt.verify(token,secretKey);
console.log("token",token);
console.log(final)

