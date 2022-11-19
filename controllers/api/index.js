const router = require('express').Router();
const userRoutes = require('./logInOutRoutes');
const projectRoutes = require('./projectRoutes');

// Include my api routes here
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;