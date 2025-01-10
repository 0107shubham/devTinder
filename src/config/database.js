const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://shubhamtyagilncte:MDA1LAbbbjX9AxEt@cluster0.nazwo.mongodb.net/"
  );
};

connectDb()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.error("Error connecting to database", err));
