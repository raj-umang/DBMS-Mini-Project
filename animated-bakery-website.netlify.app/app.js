require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path"); 

//database connection

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({
    secret: 'my secret key',
    saveUninitialized: true,
    resave: false,
    })
);

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'assets')));


//routes prefix
app.use("", require("./routes/routes"))



app.get('/api/data', (req, res) => {
    // Handle request logic
    res.json({ message: 'Data from backend' });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




