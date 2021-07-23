import expressJwt from 'express-jwt';
import Glasses from '../models/glasses';

export const requireSignin =  expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
})

export const glassesOwner = async (req, res, next) => {
    let glass = await Glasses.findById(req.params.glassId).exec()
    let owner = glass.postedBy._id == req.user._id
    if (!owner) {
        return res.status(400).send("Unauthorized")
    }
    next()
}