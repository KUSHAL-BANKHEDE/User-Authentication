const express = require("express");
const { registerUser, authUser, getAllUsers , searchUser } =require('../controllers/userController')
const dotenv = require( "dotenv" );
const{OAuth2CLint} = require('google-auth-library');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.route('/').post(registerUser).get(getAllUsers);
router.post('/login',authUser)
router.post('/search', authMiddleware, searchUser);

module.exports = router;