var express = require('express');                       
var router = express.Router();                          

/* GET home page. */
router.get('/', function(req, res, next) { // Define a GET route for the root ('/') path, representing the home page
  res.render('index', { // Render the 'index' view
    title: 'Home', // Pass 'Home' as the title
    homegreeting1: "Hello I'm Omied.", // Pass a greeting message
    homegreeting2: "Welcome to my website", // Pass a welcome message
    currentPage: 'home' // Indicate the current page is 'home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) { // Define a GET route for the '/home' path, also representing the home page
  res.render('index', { // Render the 'index' view
    title: 'Home', // Pass 'Home' as the title
    homegreeting1: "Hello I'm Omied.", // Pass a greeting message
    homegreeting2: "Welcome to my website.", // Pass a welcome message
    currentPage: 'home' // Indicate the current page is 'home'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) { // Define a GET route for the '/about' path
  res.render('index', { // Render the 'index' view
    title: 'About', // Pass 'About' as the title
    titleofpage: 'A little about me', // Pass a subtitle
    captionofphoto: 'Photo of me with a beautiful sunset', // Pass a photo caption
    paragraph1_aboutpage: "Hi! I'm Omied, a second-year Technology Management student at Ontario Tech University. I'm passionate about the potential of technology to improve the world. Always curious about the latest tech trends, I believe in using technology responsibly. My goal is to harness tech for positive change. Thanks for visiting my website; let's connect and make an impact together!", // Pass a paragraph about the page owner
    currentPage: 'about' // Indicate the current page is 'about'
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) { // Define a GET route for the '/projects' path
  res.render('index', { // Render the 'index' view
    title: 'Projects', // Pass 'Projects' as the title
    headingProject1: 'Project 1: Python Cryptography Project', // Pass a heading for the first project
    headingProject2: 'Project 2: Python Hangman Game', // Pass a heading for the second project
    headingProject3: 'Project 3: First webstie', // Pass a heading for the third project
    descriptionProject1: "Users can input their messages, choose an encryption method, and observe the transformation of their messages through different cryptographic techniques. This project serves as a practical learning resource for cryptography enthusiasts and those interested in secure communication methods.", // Pass a description for the first project
    descriptionProject2: 'This Python project is a text-based version of the classic game "Hangman."It welcomes the player and provides them with ten chances to guess a hidden word. The player inputs guesses, with incorrect ones deducting from their turns. The game ends with either a victory message for a successful guess or defeat when turns run out. It\'s a fun way to engage with fundamental programming concepts while enjoying the challenge of word guessing.', // Pass a description for the second project
    descriptionProject3: "This is my first webstie, created using basic HTML and CSS. It's a reflection of my journey into web development and demonstrates my commitment to learning and growing in this field. Feel free to explore and see how I've used fundamental web technologies to build this site.", // Pass a description for the third project
    currentPage: 'projects' // Indicate the current page is 'projects'
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) { // Define a GET route for the '/contact' path
  res.render('index', { // Render the 'index' view
    title: 'Contact', // Pass 'Contact' as the title
    headingContactPage: "Let's get in touch", // Pass a heading for the contact page
    nameContact: "Name", // Pass 'Name' as a label for the name input
    emailContact: "Email", // Pass 'Email' as a label for the email input
    messageContact: "Message", // Pass 'Message' as a label for the message input
    currentPage: 'contact' // Indicate the current page is 'contact'
  });
});

module.exports = router; 
