//Initilizing the model schema
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Creating the product model schema
const productSchema = new Schema({
     id: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,         //Each data type that the single product has inside of the DB
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

//Package and export the model
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
