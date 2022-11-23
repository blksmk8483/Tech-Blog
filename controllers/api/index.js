const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// Include my api routes here
router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router;