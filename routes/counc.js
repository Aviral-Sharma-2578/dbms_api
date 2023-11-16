require('dotenv').config('../.env')

const express=require("express");
const {counc,getCounc, getUser,getClientsOfCouncellors, changeStatus, updatePay, update}= require("../controllers/search");

const router=express.Router();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

router.get("/counc", counc),
router.post("/update", update),
router.post("/updatepayment", updatePay),
router.post("/changestatus", changeStatus),
router.post("/clientsAppointment", getClientsOfCouncellors),
router.post("/getcounc", getCounc),
router.post("/getuser", getUser),
// router.post("/login", login)


module.exports=router;