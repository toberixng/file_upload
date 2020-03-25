const express = require('express');
const router = express.Router();
const {
  check,
  validationResult
} = require('express-validator');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6})
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }

    const { name, email, password } = req.body;
    try{

      res.send('User route')
    } catch(err){
      console.err(err.message);
      res.status(500).send('Server Error');
    }
    
  });

module.exports = router;