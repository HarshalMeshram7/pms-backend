const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

/* API to create admin */
router.post("/adduser", usersController.adduser);

module.exports = router;
