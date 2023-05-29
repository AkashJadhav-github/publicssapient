const productServices = require('../services/productsService');

module.exports = {
    createProduct: async (req, res, next) => {
        try {
            const {brand, category, price, color, size, seller, region} = req.body;

            let dataToSave = {brand, category, price, color, size, seller, region};

            // service
            let result = await productServices.createProduct(dataToSave);

            result ? res.status(200).send(result) : res.status(500).send("Unable to create the product");
        } catch (error) {
            next(error)
        }
    },

    getAllProducts: async(req, res, next) => {
        try {
            // service
            let result = await productServices.getAllProducts();

            result ? res.status(200).send(result) : res.status(500).send("Unable to fetch the data");
        } catch (error) {
            next(error)
        }
    },

    getProductById: async(req, res, next) => {
        try {
            // service
            let result = await productServices.getProductById(req.params.productId);

            result ? res.status(200).send(result) : res.status(500).send("Unable to fetch the data");
        } catch (error) {
            next(error)
        }
    },

    searchProduct: async(req, res, next) => {
        try {
            // service
            let result = await productServices.searchProduct(req.body);

            result ? res.status(200).send(result) : res.status(500).send("Unable to fetch the data");
        } catch (error) {
            next(error)
        }
    },

}
