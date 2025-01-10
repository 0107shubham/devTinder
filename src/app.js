const express = require("express");
require("./config/dataBase");
const app = express();

app.use("/test", (req, res, next) => {
  console.log("Global Middleware executed");
  const token = "abcd";
  const isAuth = token === "abcde";
  if (!isAuth) {
    return res.send("Not Authenticated");
  } else {
    next();
  }
});

app.get(
  "/test/admin",
  (req, res, next) => {
    next();
  },
  (req, res) => {
    res.send("Hello World! 2");
  }
);

app.listen(3002, () => {
  console.log("Server is running on port 3000");
});
