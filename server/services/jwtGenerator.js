const crypto = require('crypto');

// Generate a 256-bit (32-byte) secret, which is a secure length
const jwtSecret = crypto.randomBytes(64).toString('hex');

console.log(jwtSecret);  // You can store this in your .env file
