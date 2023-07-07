// ----------------------------------------------------------------------------------------------
// imports and configuration
// ----------------------------------------------------------------------------------------------
const express = require("express");
const app = express();
const mongoose = require('mongoose')

// express handlebars
const exphbs = require("express-handlebars");

// Database Connection

mongoose.connect('mongodb+srv://admin:admin@fitness-studio-project.m9w5m4r.mongodb.net/?retryWrites=true&w=majority').then(function () {
  console.log("Database Connected")
})
  .catch(function () {
    console.log(error)
  })

//User Schema

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isMember: {
    type: Boolean
  }
})

const Users = new mongoose.model("Users", userSchema)

app.use(express.urlencoded({ extended: false }))

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    // functionality to output the contents of an object in the template
    helpers: {
      json: (context) => {
        return JSON.stringify(context);
      },
    },
  })
);

app.set("view engine", ".hbs");

app.use(express.static("assets"));

// PORT definition
const PORT = process.env.PORT || 8080;


// ----------------------------------------------------------------------------------------------
// SCHEDULE PAGE 
// ----------------------------------------------------------------------------------------------

const classesList = [
  { img: "/images/yoga.webp", className: " Yoga", level: "", levelDisplay: false, instructorName: "Ketty", classLength: "30 min", bookNow: "Book Now" },
  { img: "/images/zumba.jpg", className: "Zumba", level: "Beginner", levelDisplay: true, instructorName: "Paul", classLength: "60 min", bookNow: "Book Now" },
  { img: "/images/aerobic.jpg", className: "Aerobic", level: "Intermediate", levelDisplay: true, instructorName: "Mickel", classLength: "45 min", bookNow: "Book Now" },
  { img: "/images/swimming.jpg", className: "Swimming", level: "", levelDisplay: false, instructorName: "Cristina", classLength: "40 min", bookNow: "Book Now" },
  { img: "/images/gymnastic.png", className: "Gymnastic", level: "Intermediate", levelDisplay: true, instructorName: "Peter", classLength: "60 min", bookNow: "Book Now" }
]

app.post("/schedule", async (req, res) => {
    if (isLoggedin === true) {
      // push value to storage session 
      // .push()
    }
    else {
      alert("Please login to book a class.");
      res.send("ERROR: Please login to book a class.");
    }
});



// ----------------------------------------------------------------------------------------------
// CART PAGE 
// ----------------------------------------------------------------------------------------------
app.post("/cart", async (req, res) => {
  const userName = req.body.userNameInput;
  const email_db = await Users({ email });

  // user name input 
  if (userName === valid) {
    await database.save();
  }
  else {
    alert("Please enter valid username.")
    console.log("ERROR: Invalid username")
  }

  // email 
  for (email in email_db) {
    if (isLoggedin === true) {
      // print email 
    }
  }
});





// ----------------------------------------------------------------------------------------------
// endpoints
// ----------------------------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.render("home", { title: "Fitness Studio", layout: "skeleton" });
});
 res.render("schedule
app.get("/schedule", (req, res) => {
 ", { title: "Class Schedule", layout: "skeleton", listOfSchedule: classesList });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login", layout: "skeleton" });
});

app.get("/admin", (req, res) => {
  res.render("admin", { title: "Admin Dashboard", layout: "skeleton" });
});

app.get("/cart", (req, res) => {
  res.render("cart", { title: "Shopping Cart", layout: "skeleton" });
});

// web server
const onStart = () => {
  console.log(`Server is listening on port ${PORT}`);
};
app.listen(PORT, onStart);