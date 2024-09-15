import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
const app = express();
const port = 3000;
const saltRounds = 10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "870742@aA",
  port: 5432,
});
db.connect();

const plaintext = "armankapwd";
let pwd = "";
bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(plaintext, function (err, hash) {
    // await db.query("insert into users (password) values($1)",[hash]);
    pwd = hash;
  });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {

  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      const plaintext = password;

      bcrypt.genSalt(saltRounds, async function (err, salt) {

        bcrypt.hash(plaintext, salt, async function (err, hash) {
          // await db.query("insert into users (password) values($1)",[hash]);
          if (err) {
            console.error("Hashing error occurred", err);
          } else {
            console.log(hash, err);
            const result = await db.query(
              "INSERT INTO users (email, password) VALUES ($1, $2)",
              [email, hash]
            );
            res.render("secrets.ejs");
          }
        });
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;
      let check = bcrypt.compare(storedPassword,password);
      if(check){
        res.render("secrets.ejs");
      }
      else{
        res.send("incorrect password");
      }
    } else {
      res.send("User not found");
    } 
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
