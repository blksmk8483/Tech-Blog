const router = require('express').Router();
const { User, Post } = require('../models/');


router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
  
      const uData = userData.map((user) => 
      user.get({ plain: true })
      );
  
      res.render('homepage', { 
        uData,
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


// --------I want this one here --------
  // If the user is already logged in, redirect the request to another route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });


  


  module.exports = router;

