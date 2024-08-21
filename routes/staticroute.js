//this static route baiscally contain static pages i.e say frontend pages
const express = require('express');
const URL = require('../models/url.model');
const router = express.Router();

router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");
    const allurls = await URL.find({ createdBy: req.user._id })
    // console.log(allurls.shortId);
    return res.render("home", {
        urls: allurls,
    })
})

router.get('/signup', (req, res) => {
    return res.render("signup");
})
router.get('/login', (req, res) => {
    return res.render('login');
})
module.exports = router;