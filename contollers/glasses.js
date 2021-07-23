import Glasses from '../models/glasses';
import fs from 'fs';

export const create = async (req, res) => {
    try {
        let fields = req.fields
        let files = req.files
        let glasses = new Glasses(fields);
        glasses.postedBy = req.user._id

        if (files.image) {
            glasses.image.data = fs.readFileSync(files.image.path)
            glasses.image.contentType = files.image.type
        }
        glasses.save((err, result) => {
            if (err) {
                res.status(400).send("Error saving picture")
            }
            res.json(result)
        })
    } catch (err) {
        res.status(400).json({
            err: err.message
        })
    }
}

export const glass = async (req, res) => {
    let all = await Glasses.find({})
        .limit(50).select('-image.data').populate("postedBy", '_id').exec()
    res.json(all)
}

export const image = async (req, res) => {
    let glass = await Glasses.findById(req.params.glassId).exec()
    if (glass && glass.image && glass.image.data !== null) {
        res.set('Content-Type', glass.image.contentType)
        return res.send(glass.image.data)
    }
}


export const remove = async (req, res) => {
    let remove = await Glasses.findByIdAndDelete(req.params.glassId).exec()
    res.json({ ok: true })
}

export const read = async (req, res) => {
    let glasses = await Glasses.findById(req.params.glassId).select('-image.data').exec()
    console.log(glasses)
    res.json(glasses)
}


