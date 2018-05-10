const router = require('express').Router();
const articleRoutes = require("./article");
router.use('/saved', articleRoutes);

module.exports = router;
