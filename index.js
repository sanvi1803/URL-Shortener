require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticroute')
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
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({ extended: true }))
app.use('/url', urlRoute);
app.use('/', staticRoute)
//create unique id
app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true } // Returns the updated document
        );

        // Check if the entry is null
        if (!entry) {
            return res.status(404).send("Short URL not found");
        }

        // Redirect to the original URL
        res.redirect(entry.redirectURL);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});//we are finding url with req short id and then updating it with new shortid and then redirect it to the original url
//on clicking mutliple times on the generated array the number of clicks increases since the isited array entry increases and its size represents the no of clicks



app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))