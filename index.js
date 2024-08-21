require('dotenv').config();
const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))