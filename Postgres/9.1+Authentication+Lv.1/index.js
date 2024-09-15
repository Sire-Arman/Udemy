import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "870742@aA",
  port: 5432,
});
db.connect();
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
  const un = req.body.username;
  const pwd = req.body.password;
  try {
    const check = await db.query("select * from users where email = $1", [un]);
    if (check.rows.length) {
      res.send("This Email already exists.");
    } else {
      const result = await db.query(
        "insert into users (email,password) values ($1, $2)",
        [un, pwd]
      );
      res.render("secrets.ejs");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const un = req.body.username;
  const pwd = req.body.password;
  try {
    const result = await db.query(
      "select * from users where email = $1 ",
      [un]
    );
    if (result.rows.length) {
      const id = result.rows[0].id;
      const pass = result.rows[0].password;
      if(pass === pwd) res.render("secrets.ejs");
      else res.send("Incorrect Email or Password");
    } else {res.send("Invalid Credentials");}
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
