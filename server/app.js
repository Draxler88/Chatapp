const express = require("express");
const app = express();
const usersPath = require("./Routes/user")
const mongoDB = require("mongoose");



const mongoPort = 27017;
const appPort = 4000;

app.use(express.json());

//connect to Data Base
mongoDB
  .connect(`mongodb://localhost:${mongoPort}/ChatApp`)
  .then(() => console.log("Connected Succesfulle to DataBase"))
  .catch((erreur) => console.log("Errour to connect DataBASE ", erreur));

app.use("/chatApp", usersPath);

app.listen(appPort, () => {
  console.log("connected to server");
});
