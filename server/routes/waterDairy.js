const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator");

const WaterDairy = require("../models/FoodDairy");

//@route    GET api/WaterDairy
//@desc     Get all user water items
//@access   Private
router.get("/", auth, async (req, res) => {
    try {
      const waterRecords = await WaterDairy.find({ user: req.user.id }).sort({
        date: -1
      });
      res.json(waterRecords);
    } catch (err) {
      console.err(err.message);
      res.status(500);
    }
});

//@route    POST api/WaterDairy
//@desc     Add new WaterDairy
//@access   Private
router.post(
    "/", auth,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {liters} = req.body;
  
      try {
        const newWaterRecord = new FoodDairy({liters,user: req.user.id});
  
        const waterRecord = await newWaterRecord.save();
  
        res.json(waterRecord);
      } catch (err) {
        console.log(err.message);
        res.status(500);
      }
    }
);
