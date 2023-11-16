require('dotenv').config('../.env')

const express=require("express");
const {Booked,ConfirmationMail}= require("../controllers/book");

const router=express.Router();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});


router.post("/booked", Booked),
router.post("/mail", ConfirmationMail);


module.exports=router;