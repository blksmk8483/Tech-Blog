const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const blogRoutes = require('./blogRoutes');

// Include my api routes here
router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/blog', blogRoutes);

module.exports = router;