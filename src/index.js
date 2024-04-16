const signupRoute = require('./signup');
const bcrypt = require('bcrypt')
const Express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const User = require('./model_schema');
const UserVerification = require('./model_schema_verification_part')
const UserLogin = require('./login_schema');
const path = require('path');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const { nextTick } = require('process');
const center = require('./center_schema')
//const exphbs = require('express-handlebars');

const app = Express();

app.use(Express.static('../public'));
app.use(Express.static(path.join(__dirname, 'path','to', 'public')));

app.use(Express.urlencoded({extended:false}));//middleware

// Atlas URI = mongodb+srv://Nialled69:<CLUSTER_PASSWORD>@mycluster.56urdre.mongodb.net/Ecobin?retryWrites=true&w=majority

// MongoDB connection
mongoose.connect('mongodb+srv://Nialled69:DJ.NIALLED-007@mycluster.56urdre.mongodb.net/Ecobin?retryWrites=true&w=majority', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

// Mongoose connection error handling
const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));
db.once('open', () => {
  console.log('\nSuccesfully connected to DataBase\n');
});

app.use(bodyParser.json());

//login process starts here
app.post('/api/login', async(req,res) =>{

  const {username, password} = req.body;
  const IPAddress = req.ip;
  const user = await User.findOne({username});
  
  if(!user){
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  if(!user.verified){
    return res.status(401).json({ error: 'Email verification is pending! Please check your registered Email' });
  }
  const validpwd = await bcrypt.compare(password, user.password); //checking if the password matches

  if(validpwd){
    const expiresat = new Date();
    expiresat.setDate(expiresat.getDate() + 7);
    const loginDetails = new UserLogin({
        userId: user._id, 
        username: username,
        loggedInAt: new Date(),
        expiresAt: expiresat,
        ipAddress: IPAddress,
    });

    await loginDetails.save();
    res.status(200).json({message:'Login successful'});
  }
  else{
    res.status(401).json({error:'Invalid username or password'}); //password not matching case
  }
});
//login process ends here

//email verification
app.post('/api/verify-email/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const verificationData = await UserVerification.findOne({uniqueString: token});
    if (verificationData) {
      await User.updateOne({ _id: verificationData.userId }, { verified: true });
      await User.updateOne({ _id: verificationData.userId }, { points: 1000 });
      await UserVerification.deleteOne({ _id: verificationData._id });
      res.json({ success: true });
    } 
    else {
      res.json({ success: false, error: 'Invalid or expired verification token' });
    }
  } catch (error) {
    console.error('Error during email verification:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

function generateOTP() { //otp generation
  return randomstring.generate({ length: 6, charset: 'numeric' });
}

let transporter = nodemailer.createTransport({ //sending email
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

let glob_otp;

app.post('/forgot-password', async (req, res) => {
  try {
    const { identifier } = req.body;
    // Check if the identifier is a valid email or username
    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!user.verified) {
      return res.status(403).json({ error: 'User email not verified' });
    }
    glob_otp = generateOTP(); // Generate OTP and make it available globally
   
    await transporter.sendMail({  // Send OTP to user's email
      from: process.env.AUTH_EMAIL,
      to: user.email,
      subject: 'Password Reset OTP',
      html: `
        <div>
          <h2>Your OTP for password reset is: ${glob_otp}</h2>
          <h2>Do not share this with anyone</h2>
          <p> </p>
          <div>
            <img src="https://5.imimg.com/data5/PV/ER/MY-1232280/eco-660-ltr-4-wheeled-bins-1000x1000.png" alt="ECOBIN" style="width: 200px; height: 200px;">
          </div>
        </div>
      `,
    });
    res.redirect(`./new_pass.html?user=${user._id}`);
  } 
  catch (error) {
    console.error('Error during forgot password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/reset-password', async (req, res) => {
  try {
    const { otp, newPassword, confirmPassword, userId } = req.body;

    if (otp !== glob_otp) { // Checking if the OTP matches
      return res.status(400).json({ error: "Invalid OTP" });
    }

    if (newPassword !== confirmPassword) { // Checking if passwords match
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findById(userId); //using inbuilt userid as a filter

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10); // Hashing the new password
    user.password = hashedPassword; // Update user's password
    await user.save(); // Save user

    res.status(200).json({ message: 'Password reset successfully' });
  } 
  catch (error) {
    console.error('Error during password reset:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/getUserByIP', async (req, res) => { 
  try {
    const userIP = req.ip;
    const userLogin = await UserLogin.findOne({ ipAddress: userIP });
    if (userLogin) {
      const user = await User.findById(userLogin.userId);
      res.json({ user });
    } else {
      res.json({ user: null });
    }
  } catch (error) {
    console.error('Error fetching user by IP:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/redeemPoints', async (req, res) => {
  try {
      //console.log(req.body.USERNAME);
      const USERNAME = req.body.USERNAME;
      const pointsToRedeem = parseInt(req.body.pointsToRedeem);

      if (!USERNAME || isNaN(pointsToRedeem) || pointsToRedeem <= 0) {
          return res.status(400).send('Invalid points to redeem.');
      }

      const user = await User.findOne({ username: USERNAME });
      if (!user) {
          return res.status(404).send('User not found.');
      }
      if (user.points < pointsToRedeem) {
          return res.status(400).send('Not enough points to redeem.');
      }
      const prevmoney = user.points;
      user.points -= pointsToRedeem;
      const newmoney = user.points;
      await user.save();
      const diff = parseInt((prevmoney-newmoney)/10);
      user.withdrawableAmount += diff;
      await user.save();
      res.status(200).send('Points redeemed successfully.');
    } catch (error) {
      console.error('Error redeeming points:', error);
      res.status(500).send('Internal server error.');
  }
});

app.post('/api/redeemCoupon', async (req, res) => {
  try {
    const { dataMoney, dataCouponCode, USERNAME } = req.body;
    const user = await User.findOne({ username: USERNAME });
    if (!user) {
      return res.status(404).send('User not found.');
    }
    const val = parseInt(dataMoney);
    user.points-=val;
    await user.save();
    await transporter.sendMail({
      from: process.env.AUTH_EMAIL,
      to: user.email, 
      subject: 'Coupon Code',
      text: `Dear ${user.username}, Your requested coupon has been redeemed successfully.`,
      html:`
        <div style="text-align: center;">
          <h2 style="margin-bottom: 20px;">Your Coupon Code is: <span style="color: blue;">${dataCouponCode}</span></h2>
          <h3 style="color: darkslategray; margin-bottom: 50px;">Do not share this with anyone</h3>
          <p> </p>
          <p style="margin-bottom:30px">Thank you for shopping with us :D</p>
          <p> </p>
          <h3 style="text-align: left;">From Team Ecobin<h3>
          <div>
            <img src="https://5.imimg.com/data5/PV/ER/MY-1232280/eco-660-ltr-4-wheeled-bins-1000x1000.png" alt="ECOBIN" style="width: 200px; height: 200px;">
          </div>
        </div>`
    });
    res.status(200).send('Coupon redeemed successfully.');
  }catch (error) {
    console.error('Error redeeming coupon:', error);
    res.status(500).send('Internal server error.');
  }
});

app.use('/', signupRoute); //signup process

//SCHEDULING PICKUP
//Kabadiwala registration
//Kabadiwala Schema
const kschema = {
  name: String,
  mobileNumber: String,
  available: Boolean
}

const kabadiwala = mongoose.model("kabadiwala", kschema);
// kabadiwala.find({ available: true }, "name mobileNumber")
//   .then((results) => {
//     if (results.length === 0) {
//       console.log("No available kabadiwalas found.");
//     } else {
//       console.log("Available kabadiwalas:");
//       results.forEach((kabadiwala) => {
//         console.log(`Name: ${kabadiwala.name}, Mobile Number: ${kabadiwala.mobileNumber}`);
//       });
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

app.post("/kabadiwala-registration", (req,res)=>{
  let KBD = new kabadiwala({
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
      available: true
  }) 
  KBD.save();
  res.redirect('./kresponse.html');
})

//Booking pickup from E-waste Bazaar
//Pickup Schema
const pickupSchema = {
  centerName:String,
  category:String,
  mobileNumber:String,
  email:String,
  date:String,
  time:String,
  completed:Boolean
 };
 
const pickups = mongoose.model('pickups', pickupSchema);

















const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Twilio Auth Token
const client = require('twilio')(accountSid, authToken);
app.use(Express.json());
let glob_userLocation = {};
app.post('/updateLocation', (req, res) => {
  const userLocation = req.body; // Retrieve userLocation from request body
  glob_userLocation = userLocation;
  // Do something with userLocation (e.g., save it to a database)
  res.sendStatus(200); // Send a response
});


app.post("/schedulingPickup", async (req, res) => {
  try {
    // Create a new instance of the "pickups" model with data from the request body
    let pickupOrder = new pickups({
      centerName: req.body.placeName,
      category: req.body.category,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      date: req.body.date,
      time: req.body.time[1],
      completed: false
    });
    // Save the new pickup order to the database and wait for the operation to complete
    await pickupOrder.save();
    let n,mn;
    //Returns the details of the kabadiwala that is available
    try{
      const foundKabadiwala = await kabadiwala.findOne({available:true});
      if(foundKabadiwala)
      {
         foundKabadiwala.available=false;
         await foundKabadiwala.save();
         n = foundKabadiwala.name;
         mn = foundKabadiwala.mobileNumber;
      }
      else{
        console.log("No Kabadiwala found");
      }

    }catch (error) {
    console.error("Error updating kabadiwala:", error.message);
  }
    await transporter.sendMail({  // Send details to user's email
      from: process.env.AUTH_EMAIL,
      to: req.body.email,
      subject: 'Pickup Details',
      html: `
        <div>
          <h2>Your pickup request has been accepted and here are the details</h2>
          <h3>Center : ${req.body.placeName}</h3>
          <h3>Category : ${req.body.category}</h3>
          <h3>Date : ${req.body.date}</h3>
          <h3>Time : ${req.body.time[0]}</h3>
          <h3>Kabadiwala : </h3>
          <p>Name: ${n}</p>
          <p>Contact: ${mn}</p>
          <div>
            <button
          </div>
        </div>
      `,
    });
    //Finding and sending user location.
    let latitude = glob_userLocation.lat;
    let longitude = glob_userLocation.lng;
    function generateGoogleMapsLink(latitude, longitude) {
      const baseUrl = "https://www.google.com/maps";
      const queryParams = new URLSearchParams({
       q: `${latitude},${longitude}`,
        z: "15" // Optional: Set the zoom level
      });
   
      return `${baseUrl}?${queryParams.toString()}`;
    }
    let link = generateGoogleMapsLink(latitude,longitude);
    let no = "+91"+ mn;
    let mssg = `Hello ${n}, you have a new pickup request.\nDate: ${req.body.date}\nTime: ${req.body.time[1]}\nLocation: ${link}`;
    
  client.messages
  .create({
     body: mssg,
     from: '+19548704533',
     to: no,
   })
  .then(message => console.log(message.sid));
    res.redirect('/');
  } catch (error) {
    // Handle errors gracefully and send an appropriate response to the client
    console.error('Error saving pickup order:', error);
    res.status(500).send('Internal server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\nServer is running on port ${PORT}`);
});
