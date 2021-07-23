const expressJwt = require('express-jwt');
const Glasses = require('../models/glasses');

const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
})

const glassesOwner = async (req, res, next) => {
    let glass = await Glasses.findById(req.params.glassId).exec()
    let owner = glass.postedBy._id == req.user._id
    if (!owner) {
        return res.status(400).send("Unauthorized")
    }
    next()
}

module.exports = {
    requireSignin,
    glassesOwner
}