const express = require('express');

const router = express.Router();

router.get('/env', (req, res) => {
  res.send({
    env: process.env.NODE_ENV,
  });
});

router.use('/user', require('./userRouter'));
router.use('/listing', require('./listingRouter'));
router.use('/file', require('./fileRouter'));
router.use('/site', require('./siteRouter'));

module.exports = router;
