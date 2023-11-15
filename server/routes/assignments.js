let express = require('express'); // Import the express module
let router = express.Router(); // Create a new router object using Express
let Assignment = require('../models/assignments'); // Import the Assignment model (ensure correct path)
const assignments = require('../models/assignments'); // Duplicate import, possibly unnecessary

// Read Operation: Get route for the assignment list
router.get('/', async (req, res, next) => {
    try {
        const assignmentList = await Assignment.find(); // Fetch all assignments from the database
        res.render('assignments/assignments_list', { // Render the assignments list view
            title: 'Assignments',
            currentPage: 'Assignments',
            AssignmentList: assignmentList // Pass the fetched assignments data to the view
        });
    } catch (err) {
        console.error(err); // Log any errors encountered
        res.render('assignments/assignments_list', { // Render error view in case of an error
            error: 'Error on server'
        });
    }
});

// Add Operation: Get route for displaying the Add assignment page (Create Operation)
router.get('/add', async (req, res, next) => {
    try {
        res.render('assignments/add', { // Render the add assignment view
            title: 'Add an assignment',
            currentPage: 'assignments'
        });
    } catch (err) {
        console.error(err); // Log any errors encountered
        res.render('assignments/assignments_list', { // Render error view in case of an error
            error: 'Error on the server'
        });
    }
});

// Post route for processing the Add assignment page (Create Operation)
router.post('/add', async (req, res, next) => {
    try {
        let newAssignment = new Assignment({ // Create a new assignment object
            "Class": req.body.Class,
            "Name": req.body.Name,
            "Status": req.body.Status,
            "Due": req.body.Due
        });
        await Assignment.create(newAssignment); // Save the new assignment to the database
        res.redirect('/assignments-list'); // Redirect to the assignments list page
    } catch (err) {
        console.error(err); // Log any errors encountered
        res.render('assignments/assignments_list', { // Render error view in case of an error
            error: 'Error on the server'
        });
    }
});

// Edit Operation: Get route for displaying the Edit Operation (Update Operation)
router.get('/edit/:id', async (req, res, next) => {
    try {
        let assignment = await Assignment.findById(req.params.id); // Find the assignment by ID
        res.render('assignments/edit', { // Render the edit assignment view
            title: 'Edit Assignment',
            assignment: assignment
        });
    } catch (err) {
        console.error(err); // Log any errors encountered
        res.render('error', { // Render error view in case of an error
            error: 'Error on the server'
        });
    }
});

// Post route for processing the Edit Operation (Update Operation)
router.post('/edit/:id', async (req, res, next) => {
    try {
        let assignment = {
            _id: req.params.id,
            "Class": req.body.Class,
            "Name": req.body.Name,
            "Status": req.body.Status,
            "Due": req.body.Due
        };
        await Assignment.updateOne({ _id: req.params.id }, assignment); // Update the assignment in the database
        res.redirect('/assignments-list'); // Redirect to the assignments list page
    } catch (err) {
        console.error(err); // Log any errors encountered
        res.render('error', { // Render error view in case of an error
            error: 'Error on the server'
        });
    }
});

// Delete Operation: Get route to perform delete operation
router.get('/delete/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        await Assignment.deleteOne({ _id: id }); // Delete the assignment by ID
        res.redirect('/assignments-list'); // Redirect to the assignments list page
    } catch (err) {
        console.error(err); // Log any errors encountered
        res.render('error', { // Render error view in case of an error
            error: 'Error on the server'
        });
    }
});

module.exports = router; // Export the router
