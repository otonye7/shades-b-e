const Mail = require('../models/mail');

const create = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).send("Question required")
    }

    const newmails = new Mail(req.body)


    try {
        await newmails.save()
        console.log('email subscribed', newmails)
        return res.json({
            ok: true
        })
    }
    catch (err) {
        res.status(400).send('Cant subscribe')
    }

}

module.exports = {
    create
}