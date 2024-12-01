const express = require("express");
const app = express();
const cors = require("cors")
const usersPath = require("./Routes/user")
const messagesPath = require("./Routes/message")
const mongoDB = require("mongoose");



const mongoPort = 27017;
const appPort = 4000;

app.use(cors());
app.use(express.json());

//connect to Data Base
mongoDB
  .connect(`mongodb://localhost:${mongoPort}/ChatApp`)
  .then(() => console.log("Connected Succesfulle to DataBase"))
  .catch((erreur) => console.log("Errour to connect DataBASE ", erreur));

app.use("/chatapp", usersPath );

app.use("/chatapp/messages", messagesPath);

app.listen(appPort, () => {
  console.log("connected to server");
});
