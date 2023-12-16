const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jsonwebtoken = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.create({
            username,
            password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
        })
        const t
        res.status(201).json(user, token );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}