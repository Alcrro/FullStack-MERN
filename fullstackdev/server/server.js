const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();

const ProductModel = require("./models/Products/Products");
const UserModel = require("./models/User/User");

server.use(express.json());

server.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://mycula:1Samsung95@cluster0.giv7z.mongodb.net/ProductsDB?retryWrites=true&w=majority"
);

//Load Routes files
const authLogin = require("./routes/auth/login");
const users = require("./routes/user/user");

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

// server.use("/", async (req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
//   res.setHeader("Access-Control-Allow-Methods", "Content-type");
//   await next();
// });

//Mount routers
server.use("/api/auth", authLogin);
server.use("/api", users);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
