const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator");

const FoodDairy = require("../models/FoodDairy");

//@route    GET api/foodDairy
//@desc     Get all user food items
//@access   Private
router.get("/", auth, async (req, res) => {
    try {
      const foodRecords = await FoodDairy.find({ user: req.user.id }).sort({
        date: -1
      });
      res.json(foodRecords);
    } catch (err) {
      console.err(err.message);
      res.status(500);
    }
});

//@route    POST api/foodDairy
//@desc     Add new foodRecord
//@access   Private
router.post(
    "/", auth,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { dish, calories, protein, fats, carbohydrates, weight } = req.body;
  
      try {
        const newFoodRecord = new FoodDairy({
          dish,
          calories,
          protein,
          fats,
          carbohydrates,
          weight,
          user: req.user.id
        });
  
        const foodRecord = await newFoodRecord.save();
  
        res.json(foodRecord);
      } catch (err) {
        console.log(err.message);
        res.status(500);
      }
    }
);


//@route    DELETE api/foodDairy/:id
//@desc     Delete food record
//@access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
      let foodDairy = await FoodDairy.findById(req.params.id);
  
      if (!foodDairy) return res.status(404).json({ msg: 'FoodDairy not found' });
  
      if (foodDairy.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      await FoodDairy.findByIdAndRemove(req.params.id);
  
      res.json({ msg: 'Food record removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;