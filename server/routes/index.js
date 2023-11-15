var express = require('express');                       
var router = express.Router();                          

/* GET home page. */
router.get('/', function(req, res, next) { // Define a GET route for the root ('/') path, representing the home page
  res.render('index', { // Render the 'index' view
    title: 'Home', // Pass 'Home' as the title
    currentPage: 'home' // Indicate the current page is 'home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) { // Define a GET route for the '/home' path, also representing the home page
  res.render('index', { // Render the 'index' view
    title: 'Home', // Pass 'Home' as the title
    currentPage: 'home' // Indicate the current page is 'home'
  });
});


module.exports = router; 
