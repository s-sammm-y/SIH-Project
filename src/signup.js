const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./model_schema'); //user model
const Userverification = require('./model_schema_verification_part'); //user verification model
const nodemailer = require('nodemailer');
const {v4:uuidv4} = require('uuid');

require("dotenv").config();

const router = express.Router();

/* console.log(process.env.AUTH_EMAIL);
console.log(process.env.AUTH_PASS); */

let transporter = nodemailer.createTransport({
  service : "gmail",
  auth:{
    user : process.env.AUTH_EMAIL,
    pass : process.env.AUTH_PASS,
  },
})

transporter.verify((error,success) => {
  if(error){
    console.log(error);
  }
  else{
    console.log("Ready for messages");
    //console.log(success);
  }
})

// Signup routing
router.post('/signup1', async(req,res) => {
  try{
    const {username,email,contactNumber,password,confirmPassword} = req.body;

    // Checking if password and confirmPassword matches
    if (password != confirmPassword){
      return res.status(400).json({error:'Passwords do not match'});
    }
    
    const hashedPassword = await bcrypt.hash(password,10); // Hashing the password before storing it

    const verificationToken = uuidv4(); //verification token

    const user = new User({username,email,contactNumber,password:hashedPassword,verified:false,points:0,withdrawableAmount:0});

    await user.save(); // Attempt to insert the user's data to the database

    const verificationData = new Userverification({ //new collection is generated to store the verification status of the user
      userId: user._id,
      uniqueString: verificationToken,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000), //Token expiry set to 6 hours
    });
    await verificationData.save();

    await transporter.sendMail({
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: 'Verify Your Email Address',
      html: `
    <div style="text-align: center;">
      <h2>Please click here to verify your email address.</h2>
      <a href="http://localhost:3000/xyz.html?token=${verificationToken}" style="background-color: #4CAF50; /* Green */
      border-style: solid;
      border-width: 0px;
      border-color: #4CAF50;
      border-radius: 5px;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 20px 0;
      cursor: pointer; display: inline-block;">Verify</a>
      <p> </p>
      <div>
        <img src="https://5.imimg.com/data5/PV/ER/MY-1232280/eco-660-ltr-4-wheeled-bins-1000x1000.png" alt="ECOBIN" style="width: 200px; height: 200px;">
      </div>
    </div>
      `,
    });

    res.redirect('./response.html');

  }
  catch (error) {
    console.error("Error during Signup:",error);
    res.status(500).json({error: 'Internal server error'});
  }
});

module.exports = router;