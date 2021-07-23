import Questions from '../models/questions';

export const create = async (req, res) => {
    const { question } = req.body;

    if (!question) {
        res.status(400).send("Question required")
    }

    const newquestion = new Questions(req.body)
    console.log(newquestion)

    try {
        await newquestion.save()
        return res.json({
            ok: true
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).send('Cant create questions')
    }

}

export const getquestions = async (req, res) => {
    let allQuestions = await Questions.find({})
    res.json(allQuestions)
}