// HINTS:
// 1. Import express and axios
import  express, { json }  from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const port = 3000;
const app = express();
const API_URL = "https://secrets-api.appbrewery.com";
// 3. Use the public folder for static files.
app.use(express.static('public'));
// 4. When the user goes to the home page it should render the index.ejs file.
// app.get("/",(req,res)=>{
// res.render("index.ejs",{secret : "waiting", user: "NA"});
// })
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/",async (req,res) =>{
   try {
    const response = await axios.get(API_URL+"/random");
    // const result = JSON.stringify(response.data);
    console.log(response.data)
    res.render("index.ejs",{secret: response.data.secret, user : response.data.username});
   } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
})

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`App listening  on port ${port}`);
  })