//Initilizing Server
const express = require("express"); //Importing express
const server = express(); 
const mongoose = require("mongoose"); //importing mongoose
require("dotenv").config(); // Importing dotenv
const {DB_URI} = process.env; //Grabing the DB_URI from the .env file - deconstructed
const cors = require("cors"); //Importing Cors
const Product = require("./models/product"); //Importing the product model

const port = 3000;

//Middleware
server.use(express.json()); //To ensure data is transmitted as json
server.use(express.urlencoded({extended: true})); // to ensure data is encoded and decoded while in transmission
server.use(cors()); 

//Database connection and server listening
mongoose.connect(DB_URI).then(() => {
    server.listen(port, () => {
        console.log(`Database is Connected!\nServer is Listening on Port ${port}`);
    });
})
.catch((error) => console.log(error.message));

//Routes
//Root Route
server.get("/", (request, response) => {
    response.send("Server is Live!");
});

//To get the data from the products collection
server.get("/products", async (request, response) =>{
    try{
        const products = await Product.find();
        response.send(products);

    } catch(error){
        response.status(500).send({message: error.message})
    }
});
//to post a new product to the db
server.post("/products", async (request, response) => {
    const {productName, brand, image, price} = request.body;
    const newProduct  = new Product({
        productName,
        brand,
        image,
        price,
    });
    try{
        await newProduct.save();
        response.status(200).send({message: "Product had been successfully added"})   
     } catch(error){
        response.status(400).send({message: error.message})
    }
})

//to delete a product from th db by its id
server.delete("/products/:id", async (request, response) => {
    const {id} = request.params
    try{
        await Product.findByIdAndDelete(id);
        response.send({message: "Product has been successfully deleted"})
    } catch(error){
        response.status(400).send({message: error.message })
    }
})

//to get one product by id
server.get("/products/:id", async(request, response) =>{
    const { id } = request.params;
    try{
        const productToEdit = await Product.findById(id);
        response.send(productToEdit);
    } catch(error){
        response.status(500).send({ message: error.message });
    }
})