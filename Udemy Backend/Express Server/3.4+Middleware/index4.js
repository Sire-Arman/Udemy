import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName ="";

function generator(req,res,next){
  bandName = req.body.street + ' ' + req.body.pet;
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(generator);


app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(
    `<div> <h1> Your band Name is: </h1> <h2> ${bandName}👌</h2></div>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
