require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000;
const URL = require('./models/url.model')

const { restrictToLoggedInUsersOnly, checkAuth } = require('./middlewares/auth')
const { connectToMongoDB } = require('./connect')

const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticroute')
const userRoute = require('./routes/user')

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then((result) => {
        console.log("MongoDB connected");

    }).catch((err) => {
        console.log(err, "Not connected to MongoDB");

    });

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use('/url', restrictToLoggedInUsersOnly, urlRoute); //means that only loggedin user cna register
app.use('/', checkAuth, staticRoute);
app.use('/user', userRoute);
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