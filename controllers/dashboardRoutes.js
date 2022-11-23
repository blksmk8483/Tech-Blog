const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('dashboard', {
        users,
        // logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.redirect('login');
    }
  });
  

  // moved to the home-routes 0=----------------- delete my after I know it works
//   router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login');
//   });


module.exports = router;
