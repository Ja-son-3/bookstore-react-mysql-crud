import express from "express"
import mysql from "mysql2"
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PW,
    database: "test",
  });

app.get("/", (req,res)=>{
    res.json("hello this is the backend!")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})