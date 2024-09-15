import axios from "axios";

const url = "https://bored-api.appbrewery.com/random?type=social&participants=2";
var lat =0,long=0;
axios.get(url)
.then(data=>(console.log(data.data.activity)))
.then(err=>console.log(err));
// const res = JSON.parse(data);
// console.log(res.latitude);
// console.log(res.longitude);
// import express from "express"

// const app = express();

// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running successfully on PORT ${PORT}`);
// });