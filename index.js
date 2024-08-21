require('dotenv').config();
const express = require('express')
const app = express()
const ejs = require('ejs')
const urlRoute = require('./routes/url')
const URL = require('./models/url.model')
const { connectToMongoDB } = require('./connect')
const port = process.env.PORT || 3000;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then((result) => {
        console.log("MongoDB connected");

    }).catch((err) => {
        console.log(err, "Not connected to MongoDB");

    });
app.use(express.json());

app.use(express.urlencoded({ extended: true })) //create unique id
app.get('/:shortid', async (req, res) => {
    const shortid = req.params.shortid;
    const entry = await URL.findOneAndUpdate({
        shortId: shortid,
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            },
        },
    })
    res.redirect(entry.redirectURL); //we are finding url with req short id and then updating it with new shortid and then redirect it to the original url
})
//on clicking mutliple times on the generated array the number of clicks increases since the isited array entry increases and its size represents the no of clicks



app.use('/url', urlRoute);
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))