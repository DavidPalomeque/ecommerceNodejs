const router = require("express").Router()
const shopcartCtrl = require("../controllers/shopcartController")

router.get("/shopcart/:user_id" , shopcartCtrl.showShopcart)
router.get("/shopcart/deleteProduct/:shopcartProduct_id" , shopcartCtrl.deleteShopcartProduct)
router.get("/shopcart/clean/:user_id" , shopcartCtrl.cleanShopcart)
router.get("/shopcart/buy/:user_id" , shopcartCtrl.buyShopcart)

module.exports = router