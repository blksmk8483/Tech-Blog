const router = require('express').Router();
const LogInOut = require('../models');

// router.get('/', async (req, res) => {
//     try {
//         const userData = await LogInOut.findAll();

// const newUSerData = userData.map((loggedInOut) => loggedInOut.get({ plain: true }));

// res.redner('homepage', {
//     newUSerData, 
//     loggedIn: req.session.loggedIn,
// });
// }catch (err) {
//     console.log(err);
//     res.status(500).json(err)
// });

router.get('/', async (req, res) => {
    try {
      const userData = await LogInOut.findAll();
  
      const uData = userData.map((loggedInOut) =>
        loggedInOut.get({ plain: true })
      );
  
      res.render('homepage', {
        uData,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;