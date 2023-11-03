require('dotenv').config();

const path = require('path');

const express = require('express');

const blogRoutes = require('./backend/routes/blog');

const app = express();

const port = process.env.PORT;

// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/frontend', 'views'));

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.static(path.join(__dirname + '/frontend', 'public'))); // Serve static files (e.g. CSS files)

app.use(blogRoutes);

app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render('500');
});

app.listen(port, () => {
  console.log(`Server runing at: http://localhost:${port}`);
});
