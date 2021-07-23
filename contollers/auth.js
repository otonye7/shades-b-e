const User = require('../models/user');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { name, lastName, email, password } = req.body;

    if (!name) {
        res.status(400).send("Name is required")
    }

    if (!lastName) {
        res.status(400).send("Last Name required")
    }

    if (!password || password.length < 6) {
        res.status(400).send("Password too short")
    }

    let existingUser = await User.findOne({ email }).exec();

    if (existingUser) {
        res.status(400).send("User already exist")
    }

    const user = new User(req.body)

    try {
        await user.save()
        return res.json({
            ok: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).send("Cant create user")
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email }).exec()
        if (!user) {
            return res.send(400).status("User with that email not found")
        }
        user.comparePassword(password, (err, match) => {
            if (!match || err) {
                return res.status(400).send("Incorrect password")
            }
            let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '7d'
            });
            res.json({
                token, user: {
                    _id: user._id,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            })
        })
    } catch (err) {
        console.log(err)
        return res.status(400).send('Sign in failed')
    }
}

module.exports = {
    signup,
    login
}