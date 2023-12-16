const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jsonwebtoken = require('jsonwebtoken');

/**
 * Registers a new user.
 * 
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({
            username,
            password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
        });
        const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SEC, { expiresIn: '3d' });
        res.status(201).json(user, token);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Logs in a user with the provided credentials.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to the user object and a token if login is successful, or an error object if login fails.
 */
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username }).select('password username');
        if (!user) {
            return res.status(401).json({ param: 'username' , error: 'Invalid credentials' });
        }
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if (originalPassword !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        user.password = undefined;
        const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SEC, { expiresIn: '3d' });
        res.status(200).json(user, token);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}