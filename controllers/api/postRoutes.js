const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const userPost = await Post.create({ 
        ...req.body, 
        user_id: req.session.user_id 
    });
      res.status(200).json(userPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;