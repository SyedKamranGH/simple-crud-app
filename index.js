const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const uri =
  "mongodb+srv://syedkamahmed:uAkzJT3LD18xAWDt@backenddb.gdelu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";

const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World from node API and nodemon ");
});

//Get list of products and single product

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const products = await Product.findById(id);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Create a product

// app.post("/api/products", async (req, res) => {
//   console.log("req.body --> ", req.body);
//   // res.send(req.body);
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //Update a product

// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete a product

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// app.listen(3000)

// mongoose
//   .connect(
//     "mongodb+srv://syedkamahmed:uAkzJT3LD18xAWDt@backenddb.gdelu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
//   )
//   .connect.then(() => {
//     console.log("Connected to database");
//   })
//   .catch(() => {
//     console.log("Connection failed");
//   });
