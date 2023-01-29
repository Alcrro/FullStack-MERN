const express = require("express");
const mongoose = require("mongoose");
const corse = require("cors");
const server = express();

const ProductModel = require("./models/Products/Products");

server.use(express.json());
server.use(corse());

mongoose.connect(
  "mongodb+srv://mycula:1Samsung95@cluster0.giv7z.mongodb.net/ProductsDB?retryWrites=true&w=majority"
);

server.post("/insert", async (req, res, next) => {
  const brand = req.body.productBrand;
  const count = req.body.productCount;
  const product = new ProductModel({ brand, count });
  try {
    await product.save();
    res.send("product added");
  } catch (error) {
    console.log(error);
  }
});

server.get("/read", (req, res, next) => {
  ProductModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});
server.put("/update", async (req, res, next) => {
  const newProdName = req.body.newProductBrand;
  const id = req.body.id;
  try {
    await ProductModel.findById(id, (err, updatedFood) => {
      updatedFood.brand = newProdName;
      updatedFood.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

server.delete("/delete/:id", async (req, res, next) => {
  const id = req.params.id;
  await ProductModel.findByIdAndRemove(id).exec();
  res.send("Deleted");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
