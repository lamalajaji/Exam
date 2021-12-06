const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DB_URL, options)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connected");
  });
