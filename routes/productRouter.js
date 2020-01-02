const router = require("express").Router()
const productCtrl = require("../controllers/productController")
const {ensureAuthenticated} = require("../config/auth")

router.get("/products" , ensureAuthenticated  , productCtrl.getAllProducts)
router.post("/products/sorting/category&price" , ensureAuthenticated  , productCtrl.getAllProductsBySorting)
router.get("/products/showOne/:_id" , ensureAuthenticated  , productCtrl.showOneProductById)
router.post("/products/addToShopcart/:user_id&:product_id" , ensureAuthenticated , productCtrl.addProductToShopcart)

module.exports = router