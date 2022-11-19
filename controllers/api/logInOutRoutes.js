const router = require('express').Router();
const { LogInOut } = require('../../models'); 
const withAuth = require('../../utils/auth');

//---------Nothing is callin withAuth ---------

// -------- CREATE a new user --------
router.post('/', async (req, res) => {
try {
    const userData = await LogInOut.create(req.body);

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.status(200).json(userData);
    });
} catch (err) {
    res.status(400).json(err);
}
});

// -------- This creates a new login --------
router.post('/login', async (req, res) => {
    try {
      const userData = await LogInOut.findOne({ 
        where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Oh No! The email is wrong!!!. Please try again!' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Wrong password! Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  });

// -------- Logout --------
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;