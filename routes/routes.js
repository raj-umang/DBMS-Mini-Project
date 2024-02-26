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
  console.log(' name: ',req.body);

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
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

//Insert an user into database route
// router.post('/add', (req, res) => {
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         password: req.body.password
//     });
//     user.save((err) => {
//         if(err){
//             res.json({message: err.message, type: 'danger'});
//         }else {
//             req.session.message = {
//                 type:'success',
//                 message: 'User added successfully'
//             };
//             res.redirect('/');
//         }
//     })
// })

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

router.get("/cart", (req, res) => {
  res.render("cart.ejs");
});

module.exports = router;
