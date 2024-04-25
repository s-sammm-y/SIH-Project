We are <h2>Team Breaking Bytes</h2> <p>Some of us are more broke than we look :)  But nevertheless, thanks for taking your interest on viewing this project.</p>
This is our very own, one in a thousand web-app named
## ***Ecobin***
#### It is made completely in raw **HTML, CSS and Javascript**
<p>We are running a server in the background using Express and Node JS to connect all the HTML webpages.</p>
<p></p>

We used the **Maps Javascript API** from the Google CLoud Console to locate all the nearest E-waste collection centres in the User's area using real-time places and their co-ordinates. (The API key is removed for security reasons, you can create your own API from the Google Cloud console free of cost. There are numerous Youtube videos on how to get the Maps API key)
#### The **Places API** and the **Directions API** inside the MAPS JS API will also provide the user the route to reach the collecting centre of their choice and experience things First-hand.
#### We also have implemented a Machine Learning Model to detect images and categorize them if they are E-waste or not. We used  *YOLO v5*  for implementing the said ML model.
#### For maintaining the Database, we have used MongoDB which is a NoSQL database that works brilliantly on JSON file types. The user registration, pickup scheduling, rewards earning are all maintained seamlessly in the Mongo cluster.
##### We also used some basic Bootstrap modules for the improvement in UI/UX design. 

### -> How to run the whole website in your local environment ? 
<p>Step 1 - Get the Google MAPS Javascript API key. If you dont have one, <a href="https://developers.google.com/maps">click here</a>. It is completely free to generate the API, dont worry.</p>
<p>Step 2 - Download Node JS. <a href="https://nodejs.org/en/download">Click Here</a> if you haven't downloaded yet. Set Node JS and npm in the environment variable so that you can use it from anywhere.</p>

Step 3 - Clone this repo using  `git clone`  (Make sure Git is downloaded already. If not , download <a href="https://git-scm.com/downloads">GIT </a> )

Step 4 - Go to the Repository where you've cloned this project and open **command prompt/GIT BASH**

Step 5 - type in  `cd src`  ,press Enter.

Step 6 - type in `npm i mongoose express randomstring uuidv4 nodemailer bcrypt stripe` and wait until the download finishes.

Step 7 - Open `Hulla.html` using any code editor present inside the Public directory inside the cloned project. Inside you'll find a tag saying **"Google MAPS API"** with a random string (that is the previous API key). Replace it with your new API key and save the file.

Step 8 - type  in  `cd src`  , press Enter and again type  `node index.js`  . It'll show a message saying `"Server is connected to Database"`

Step 9 - Do not close the command prompt/BASH window . Go to any browser and type in  `http://localhost:3000`  in the URL and enjoy browsing the website.

If you get any errors while running the webpage, you can contact us through  `ecobintechnology@gmail.com` or go to <a href="https://chat.openai.com">Sensei</a> for more help.

## Thank You

#### Made with Love by Soumyadeep Basu, Sourasish Biswas, Ankit Das and Sarthik Dasgupta ........................
