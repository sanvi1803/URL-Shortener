const express = require('express');
const router = express.Router();
const { handleGenerateUrl, handleGenerateAnalytics } = require('../controllers/url');

router.post('/', handleGenerateUrl)
//route to get number of clicks i.e analytics
router.get('/analytics/:shortId', handleGenerateAnalytics)
module.exports = router;