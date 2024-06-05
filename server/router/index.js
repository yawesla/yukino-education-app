const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const courseController = require("../controllers/courseController");
const { AuthN } = require("../middlewares/auth");
const { errorHandle } = require("../middlewares/errorHandling");


router.post("/register", userController.register);
router.post("/login", userController.login);

// pub 
router.use(AuthN)
router.post('/course',courseController.addCourse)

router.use(errorHandle);

module.exports = router;
