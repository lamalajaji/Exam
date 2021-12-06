const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const morgan = require("morgan");
const cors = require("cors");


app.use(express.json());
app.use(morgan("dev"));
app.use(cors);



const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
