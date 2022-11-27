const router = require('express').Router();
const { User, Blog } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const blogData = await Blog.findAll({
        include: [
          {
            model: User, 
            attributes: ['username'],
          },
        ],
      });
  
      const blogs = blogData.map((user) => 
      user.get({ plain: true })
      );
  
      res.render('homepage', { 
        blogs,
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/singleBlog/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const blog = blogData.get({ plain: true });
  
      res.render('singleBlog', {
        ...blog,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // // -----------------New stuff -------
  // router.get('/editSingle/:id', async (req, res) => {
  //   try {
  //     const blogEdit = await Blog.findByPk(req.params.id);
  
  //     const blog = blogEdit.get({ plain: true });
  
  //     res.render('singleBlog', {
  //       ...blog,
  //       logged_in: req.session.logged_in
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });



  router.get('/dashboard', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Blog }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


// --------I want this one here --------
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });


  


  module.exports = router;

