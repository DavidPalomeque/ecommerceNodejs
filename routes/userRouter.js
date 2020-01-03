const router = require("express").Router()
const UserCtrl = require("../controllers/userController")
const {ensureAuthenticated} = require("../config/auth")

router.get("/users/signup" , (req , res) => { 
    res.render("signuplogin/signup")
})
router.post("/users/signup" , async(req , res) => {
    // Data
    const {name , email , password , password2} = req.body
    const errors = []

    // Validations
    if (!name || !email || !password || !password2) errors.push("All the fields have to be complete !")
    const emailIsInUse = await User.findOne({email : email})
    if (emailIsInUse) errors.push("This is Email is already in use !")
    if (password.length < 6) errors.push("The Password must contain at least 6 characters !")
    if (password !== password2) errors.push("The passwords must match !")

    // Create or don´t create User
    if (errors.length > 0) { // don´t create User
        errors.forEach(error =>  req.flash("error_msg" , error))
        res.redirect("/users/signup")
    } else { // create user
        const newUser = new User({ name , email , password })

        bcrypt.genSalt(10 , (err , salt) => { // Hashing Password
            bcrypt.hash(newUser.password , salt , (err , hash) => {
                if(err) throw err

                newUser.password = hash // Replacing normal password with the hashed password
                newUser.save() // Saving the new User in the db
                 .then(newUser => {
                    req.flash("success_msg" , "Done! Now you only have to login.") 
                    res.redirect("/users/login")
                 })
                 .catch(err => {
                     console.log(err)
                     req.flash("error_msg" , "Sorry , some error happened.") 
                     res.redirect("/users/signup")
                 })
            })
        })
    }
})

router.get("/users/login" , (req , res) => {
     res.render("signuplogin/login")
})
router.post("/users/login" , UserCtrl.login)
router.get("/users/logout" , ensureAuthenticated , UserCtrl.logout)

module.exports = router