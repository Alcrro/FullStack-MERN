const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const errorHandler = require("./middleware/error/error");
const connectDB = require("./config/mongoDB");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Load Routes files
const authLogin = require("./routes/auth/login");
const users = require("./routes/user/user");
const index = require("./routes/index/index");

const server = express();

server.use(express.json());
server.use(cookieParser());
server.use(cors());

const store = new MongoDBSession({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

server.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

//Mount routers
server.use("/", index);
server.use("/api/auth", authLogin);
server.use("/api", users);

server.use(errorHandler);

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

server.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} on port ${PORT}`);
});
