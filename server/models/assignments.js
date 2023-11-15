let mongoose = require('mongoose'); // Import the mongoose module

// Create a model class
let assignmentModel = mongoose.Schema({ // Define a new schema for the assignment model
    Class: String, // Field for Class, type String
    Name: String,  // Field for Name, type String
    Status: String, // Field for Status, type String
    Due: String,    // Field for Due date, type String
},
{
    collection: "assignments" // Specify the collection name in the database
});

module.exports = mongoose.model('assignments', assignmentModel); // Export the model, making it accessible to other parts of the application
