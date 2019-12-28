const router = require("express").Router()
const UserCtrl = require("../controllers/userController")

router.get("/users/signup" , (req , res) => {
    res.render("signup&login/signup")
})

router.post("/users/signup" , UserCtrl.signup)

router.get("/users/login" , (req , res) => {
    res.render("signup&login/login")
})

router.post("/users/login" , UserCtrl.login)

router.get("/users/logout" , UserCtrl.logout)

module.exports = router