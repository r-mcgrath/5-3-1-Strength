const express = require('express'); 
const router = express.Router();

const entryController = require('../controllers/entryController');

// route that handles POST requests
router.post('/', entryController.postEntry, (req, res )=> {
    return res.status(201).json(res.locals.entry);
  });
  
  // route that handles GET requests
router.get('/', entryController.getEntries, (req,res) => {
    return res.status(200).json(res.locals.entries);
  });

  // route that handles DELETE requests
router.delete('/:id', /*authController.checkCookie,*/ entryController.deleteEntry, (req, res) => {
    return res.status(200).json(res.locals.deletedEntry);
  });
  
  module.exports = router;