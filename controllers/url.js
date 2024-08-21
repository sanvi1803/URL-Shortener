const ShortUniqueId = require('short-unique-id')
const uid = new ShortUniqueId({ length: 8 });
//to make or create model we need to reqire our model
const URL = require('../models/url.model')

async function handleGenerateUrl(req, res) {
    const shortId = uid.rnd();
    const body = req.body;
    if (!body.url) return res.status(400).json({ err: 'url is required' }); //if url is not given
    // console.log(shortId);
    let createdURL = await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: []
    });
    res.send({ id: shortId });
}
async function handleGenerateAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalclicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = { handleGenerateUrl, handleGenerateAnalytics };