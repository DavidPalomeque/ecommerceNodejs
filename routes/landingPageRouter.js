const router = require("express").Router()

router.get("/" , (req , res) => {
    res.render("landingPage/landingPage")
})

module.exports = router