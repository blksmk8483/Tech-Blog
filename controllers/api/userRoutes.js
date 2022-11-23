const router = require('express').Router();
const { User } = require('../../models'); 

// -------- CREATE a new user --------
router.post('/', async (req, res) => {
try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        req.session.username = userData.username;

        res.status(200).json(userData);
    });
} catch (err) {
    // res.status(400).json(err);
    res.status(400).json(err);
}
});

// -------- login --------
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ 
        where: { username: req.body.username } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Oh No! The username is wrong!!!. Please try again!' });
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
        req.session.username = userData.username;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  });

// -------- Logout --------
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;