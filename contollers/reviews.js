const Reviews = require('../models/reviews');

const create = async (req, res) => {
    const { email, title, name, reviews } = req.body;

    if (!email) {
        res.status(400).send("Last Name required")
    }

    if (!title) {
        res.status(400).send("Last Name required")
    }

    if (!name) {
        res.status(400).send("Name is required")
    }

    if (!reviews) {
        res.status(400).send("Password too short")
    }

    const review = new Reviews(req.body)

    try {
        await review.save()
        console.log('review created', review)
        return res.json({
            ok: true
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).send('Cant create reviews')
    }

}

const getreviews = async (req, res) => {
    let allReviews = await Reviews.find({})
    res.json(allReviews)
}

module.exports = {
    create,
    getreviews
}
