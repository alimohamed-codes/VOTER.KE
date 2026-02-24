const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const speakeasy = require('speakeasy');

// Password Hashing
const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// JWT Token Generation
const generateToken = (user) => {
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', {
        expiresIn: '1h', // token will expire in 1 hour
    });
    return token;
};

// Multi-Factor Authentication Setup
const setupMFA = () => {
    const secret = speakeasy.generateSecret({ length: 20 });
    return {
        secret: secret.base32, // Store this secret in your user database
        otpauth_url: secret.otpauth_url, // QR code URL to scan
    };
};

module.exports = {
    hashPassword,
    generateToken,
    setupMFA,
};
