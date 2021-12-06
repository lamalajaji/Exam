1- sh: nodemon: command not found => npm i nodemon /// or npm i nodemon --global
2- Error: Cannot find module '../db'  => require("./db");
3- Error: Cannot find module 'mongoose' => npm i mongoose
4- Error: Cannot find module './../../db/models/todos'  => 
5-Error: Cannot find module 'mongose' => const mongoose = require("mongoose");
6-  const todoModel = mongoose.modele("Todo", todoSchema);
                           ^

TypeError: mongoose.modele is not a function => const todoModel = mongoose.model("Todo", todoSchema);

7-Error: Route.get() requires a callback function but got a [object Undefined] => module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
};

8- Error: Route.put() requires a callback function but got a [object Undefined] => export the function in the controller => module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
};

9- app.use(morgan("dev"));
    ^

ReferenceError: morgan is not defined   => in terminal : npm i morgan ... in index.js file =>  const morgan = require("morgan");


10 - events.js:377
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use 4000;    => in .env file => PORT=4000 


10- TypeError: Cannot read property 'todo' of undefined (POST function) => Move app.use(express.json());  => in floder db =>index => change DB_URI to DB_URL 

11 -  change  task: { type: Boolean, required: true }  To => task: { type: String, required: true } 


