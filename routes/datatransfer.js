var express = require("express");
var router = express.Router();
const entryHome = require("../models/entry_home");
const entryStep01 = require("../models/entry_step01");
const entryStep02 = require("../models/entry_step02");
const entryStep03 = require("../models/entry_step03");
const entryStep04 = require("../models/entry_step04");

// POST

router.post("/homepush", (req, res, next) => {

  const Email = req.body.Email

  entryHome.findOne({ Email }).then(foundUser => {
    if (foundUser) {
      console.log("Username taken. Choose another one.")
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const newEntry = new entryHome({
      NaamSchool: req.body.NaamSchool,
      Adres: req.body.Adres,
      NaamInvuller: req.body.NaamInvuller,
      Functie: req.body.Functie,
      Postcode: req.body.Postcode,
      Email: req.body.Email,
      Plaats: req.body.Plaats,
      Telefoon: req.body.Telefoon
    });

    newEntry.save().then(respose => {
      res.status(200).json(respose);
    });
  });
});

router.post("/step01push", (req, res, next) => {

    const newEntry = new entryStep01({
      Email: req.body.user,
      _1_1_1: req.body._1_1_1,
      _1_1_2: req.body._1_1_2,
      _1_1_3: req.body._1_1_3,
      _1_2_1: req.body._1_2_1,
      _1_2_2: req.body._1_2_2,
      _1_2_3: req.body._1_2_3,
      _1_2_4: req.body._1_2_4,
      _1_2_5: req.body._1_2_5,
      _1_2_6: req.body._1_2_6,
      _1_2_7: req.body._1_2_7,
      _1_2_8: req.body._1_2_8,
      _1_2_9: req.body._1_2_9,
      _1_2_10: req.body._1_2_10,
      _1_3: req.body._1_3,
      _1_4_1: req.body._1_4_1,
      _1_4_2: req.body._1_4_2,
      _1_4_3: req.body._1_4_3,
      _1_4_4: req.body._1_4_4,
      _1_4_5: req.body._1_4_5,
      _1_5: req.body._1_5,
      _1_6: req.body._1_6,
    });

    newEntry.save().then(respose => {
      res.status(200).json(respose);
    });
});

router.post("/step02push", (req, res, next) => {

  const newEntry = new entryStep02({
    Email: req.body.user,
    _2_1: req.body._2_1,
    _2_2_1: req.body._2_2_1,
    _2_2_2: req.body._2_2_2,
    _2_2_3: req.body._2_2_3,
    _2_2_4: req.body._2_2_4,
    _2_2_5: req.body._2_2_5,
    _2_2_6: req.body._2_2_6,
    _2_2_7: req.body._2_2_7,
    _2_2_8: req.body._2_2_8,
    _2_2_9: req.body._2_2_9,
    _2_2_10: req.body._2_2_10,
    _2_3: req.body._2_3,
    _2_4_1: req.body._2_4_1,
    _2_4_2: req.body._2_4_2,
    _2_4_3: req.body._2_4_3,
    _2_4_4: req.body._2_4_4,
    _2_4_5: req.body._2_4_5,
    _2_4_6: req.body._2_4_6,
    _2_5: req.body._2_5,
    _2_6: req.body._2_6
  });

  newEntry.save().then(respose => {
    res.status(200).json(respose);
  });
});

router.post("/step03push", (req, res, next) => {

  const newEntry = new entryStep03({
    Email: req.body.user,
    _3_1_1: req.body._3_1_1,
    _3_1_2: req.body._3_1_2,
    _3_1_3: req.body._3_1_3,
    _3_1_4: req.body._3_1_4,
    _3_1_5: req.body._3_1_5,
    _3_1_6: req.body._3_1_6,
    _3_1_7: req.body._3_1_7,
    _3_2_1: req.body._3_2_1,
    _3_2_2: req.body._3_2_2,
    _3_2_3: req.body._3_2_3,
    _3_2_4: req.body._3_2_4,
    _3_2_5: req.body._3_2_5,
    _3_2_6: req.body._3_2_6,
    _3_2_7: req.body._3_2_7,
    _3_2_8: req.body._3_2_8,
    _3_2_9: req.body._3_2_9,
    _3_2_10: req.body._3_2_10,
    _3_3: req.body._3_3,
    _3_4_1: req.body._3_4_1,
    _3_4_2: req.body._3_4_2,
    _3_4_3: req.body._3_4_3,
    _3_4_4: req.body._3_4_4,
    _3_4_5: req.body._3_4_5,
    _3_5: req.body._3_5,
    _3_6: req.body._3_6
  });

  newEntry.save().then(respose => {
    res.status(200).json(respose);
  });
});


router.post("/step04push", (req, res, next) => {

  const newEntry = new entryStep04({
    Email: req.body.user,
    _4_1: req.body._4_1,
    _4_2_1: req.body._4_2_1,
    _4_2_2: req.body._4_2_2,
    _4_2_3: req.body._4_2_3,
    _4_2_4: req.body._4_2_4,
    _4_2_5: req.body._4_2_5,
    _4_2_6: req.body._4_2_6,
    _4_2_7: req.body._4_2_7,
    _4_2_8: req.body._4_2_8,
    _4_2_9: req.body._4_2_9,
    _4_2_10: req.body._4_2_10,
    _4_3: req.body._4_3,
    _4_4_1: req.body._4_4_1,
    _4_4_2: req.body._4_4_2,
    _4_4_3: req.body._4_4_3,
    _4_4_4: req.body._4_4_4,
    _4_4_5: req.body._4_4_5,
    _4_4_6: req.body._4_4_6,
    _4_5: req.body._4_5,
    _4_6: req.body._4_6
  });

  newEntry.save().then(respose => {
    res.status(200).json(respose);
  });
});



// GET
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
