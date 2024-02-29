const express = require("express");
const router = express.Router();
const User = require("../models/users");
const multer = require("multer"); //for imageupload

//image upload
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./uploads");
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
//     }
// })

// var upload = multer({
//     storage: storage
// }).single('image');

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log(" name: ", req.body);

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ user });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const user = new User({ name, email, phone, password });
    await user.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/users", (req, res) => {
  res.send("All users");
});

// Define routes
router.get("/", (req, res) => {
  res.render("index.ejs");
});
router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.get("/admin", (req, res) => {
  res.render("admin.ejs");
});

router.get("/login/home", (req, res) => {
  const { email, password } = req.query;
  console.log("Email:", email);
  console.log("Password:", password);
  if (email === "sourav@gmail.com" && password === "sourav") {
    console.log("Rendering admin.ejs");
    res.render("admin.ejs");
  } else {
    console.log("Rendering home.ejs");
    res.render("home.ejs");
  }
});

router.get("/cart", (req, res) => {
  // Assuming `yourProductsArray` is the array of products you want to pass to the view
  res.render("cart.ejs", { products: yourProductsArray });
});

module.exports = router;
