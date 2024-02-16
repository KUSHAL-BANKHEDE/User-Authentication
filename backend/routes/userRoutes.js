const express = require("express");
const { registerUser, authUser, getAllUsers } =require('../controllers/userController')

const router = express.Router();

router.route('/').post(registerUser).get(getAllUsers);
router.post('/login',authUser)

module.exports = router;