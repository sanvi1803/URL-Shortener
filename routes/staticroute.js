//this static route baiscally contain static pages i.e say frontend pages
const express = require('express');
const URL = require('../models/url.model');
const router = express.Router();

router.get("/", async (req, res) => {
    const allurls = await URL.find({})
    // console.log(allurls.shortId);

    return res.render("home", {
        urls: allurls,

    })
})


module.exports = router;