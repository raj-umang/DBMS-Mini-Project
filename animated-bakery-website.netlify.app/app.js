require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const User = require("./models/users"); // Import the User model

const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "assets")));

// Include your provided routes for increment and decrement
// app.use(require('./path-to-your-routes-file')); // Update this line with the correct path

//routes prefix
app.use("", require("./routes/routes"));

// app.post("/register", async (req, res) => {
//     const { name, email, phone, password } = req.body;
//     console.log(' name: ',req.body);

// try {
//   // Check if the user already exists
//   const existingUser = await User.findOne({ username });
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   // Create a new user
//   const user = new User({ name, email, phone, password });
//   await user.save();

//   res.status(200).json({ message: "User registered successfully" });
// } catch (error) {
//   res.status(500).json({ message: "Server error" });
// }
//   });

// app.get('/api/data', (req, res) => {
//     // Handle request logic
//     res.json({ message: 'Data from backend' });
// });

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      req.session.user = user; // Create a session
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Registration route
app.post("/register", async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ name, phone, email, password });
    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
