const d = new Date();
const days = d.getDay();
import path from "path";
import express  from "express";
const app = express();
const port = 3000;
let day = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
app.set('view engine', 'ejs');
app.get("/",(req,res,next)=>{
    res.render("index.ejs",{fruits: day});
})
app.listen(port,()=>{
    console.log("listening to port");
})

