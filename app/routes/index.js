const express = require('express');
const router = express.Router();

//import routes
const newPost = require('./blogPost');

router.use('/newPost', newPost);

module.exports = router;
