const express = require('express');
const commmentController = require('../controllers/comment.controller');
const router = express.Router();

router.post("/comments", commmentController.create);

module.exports = router