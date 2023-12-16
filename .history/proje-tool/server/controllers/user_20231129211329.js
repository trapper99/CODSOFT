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

exports.logi