const productCtrl = {}
const Product = require("../models/productModel")

// GET ALL PRODUCTS
productCtrl.getAllProducts = async(req , res) => {
    const products = await Product.find()

    if (!products) {
        res.render("products/productsPage")
    } else {
        res.render("products/productsPage" , {products})
    }

}

// GET ALL PRODUCTS BY SORTING (category , price)
productCtrl.getAllProductsBySorting = async (req, res) => {
    //Data
    const { category, price } = req.body

    //Validations
    if (!category || !price) { // checking if there is category and price
        req.flash("error_msg", "Some data is missing !")
        res.redirect("/products")
    } else { // checking if the category and the price exist
            const categoryExists = await Product.find({ category: category })
            if (!categoryExists || (price !== "all" && price !== "high" && price !== "low")) {
                req.flash("error_msg", "Something went wrong with the sent data !")
                res.redirect("/products")
            } else { // displaying the products according to the sent category and price

                // getting category´s products
                var categoryProducts = await Product.find({ category: category })
                if (category == "all") categoryProducts = await Product.find()

                // ordering category´s products by price and displaying them
                if (price == "all") { // without specific order
                    const products = categoryProducts
                    res.render("products/productsPage", { products })
                }
                if (price == "high") { // from highest to lowest
                    const products = await categoryProducts.sort( (a , b) => { // ordering function
                        if (a.price < b.price) return 1
                        if (a.price > b.price) return -1
                        return 0
                    })
                    res.render("products/productsPage", { products })
                }
                if (price == "low") { // from lowest to highest
                    const products = await categoryProducts.sort( (a , b) => {
                        if (a.price > b.price) return 1
                        if (a.price < b.price) return -1
                        return 0
                    })
                    res.render("products/productsPage", { products })
                }
            }
        }
}

// GET ONE PRODUCT BY NAME
productCtrl.getOneProductByName = async(req , res) => {}

// SHOW ONE PRODUCT BY ID
productCtrl.showOneProductById = async(req , res) => {}

// ADD PRODUCT TO SHOPCART (id , quantity)
productCtrl.addProductToShopcart = async(req , res) => {}

module.exports = productCtrl