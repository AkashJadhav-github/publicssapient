const Product = require('../models/productsModel');

module.exports = {
    createProduct: async (dataToSave) => {
        let result = await Product.create(dataToSave);
        return result
    },

    getAllProducts: async () => {
        let result = await Product.find({});
        return result
    },

    getProductById: async (id) => {
        let result = await Product.findById(id);
        return result
    },

    // BODY
    //    {
    //     "_id": "$seller",
    //     "color": "$color",
    //     "groupBy": "seller"
    //    }
    searchProduct: async (condition) => {
        let result = await Product.find(condition);
        result = condition.groupBy ? groupBy(result, condition.groupBy) : result;
        return result
    }
}

// Helper function to group an array of objects by a specific key
function groupBy(arr, key) {
    return arr.reduce((result, obj) => {
        const value = obj[key];
        (result[value] = result[value] || []).push(obj);
        return result;
    }, {});
}