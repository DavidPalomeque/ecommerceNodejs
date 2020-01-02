const router = require("express").Router()
const landingPageCtrl = require("../controllers/landingPageController")

router.get("/" , (req , res) => res.render("landingPage/landingPage"))
router.post("/contactForm" , landingPageCtrl.contactForm)

module.exports = router