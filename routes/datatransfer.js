var express = require("express");
var router = express.Router();
let axios = require("axios");
const entryHome = require("../models/entry_home");
const entryStep01 = require("../models/entry_step01");
const entryStep02 = require("../models/entry_step02");
const entryStep03 = require("../models/entry_step03");
const entryStep04 = require("../models/entry_step04");

// POST

router.post("/homepush", (req, res, next) => {
  const Email = req.body.Email;

  entryHome.findOne({ Email }).then(foundUser => {

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

    const newEntryStep01 = new entryStep01({
      Email: req.body.Email,
      _1_1_1: "",
      _1_1_2: "",
      _1_1_3: "",
      _1_2_1: "",
      _1_2_2: "",
      _1_2_3: "",
      _1_2_4: "",
      _1_2_5: "",
      _1_2_6: "",
      _1_2_7: "",
      _1_2_8: "",
      _1_2_9: "",
      _1_2_10: "",
      _1_3: "",
      _1_4_1: "",
      _1_4_2: "",
      _1_4_3: "",
      _1_4_4: "",
      _1_4_5: "",
      _1_5: "",
      _1_6: ""
    });

    const newEntryStep02 = new entryStep02({
      Email: req.body.Email,
      _2_1: "",
      _2_2_1: "",
      _2_2_2: "",
      _2_2_3: "",
      _2_2_4: "",
      _2_2_5: "",
      _2_2_6: "",
      _2_2_7: "",
      _2_2_8: "",
      _2_2_9: "",
      _2_2_10: "",
      _2_3: "",
      _2_4_1: "",
      _2_4_2: "",
      _2_4_3: "",
      _2_4_4: "",
      _2_4_5: "",
      _2_4_6: "",
      _2_5: "",
      _2_6: ""
    });

    const newEntryStep03 = new entryStep03({
      Email: req.body.Email,
      _3_1_1: "",
      _3_1_2: "",
      _3_1_3: "",
      _3_1_4: "",
      _3_1_5: "",
      _3_1_6: "",
      _3_1_7: "",
      _3_2_1: "",
      _3_2_2: "",
      _3_2_3: "",
      _3_2_4: "",
      _3_2_5: "",
      _3_2_6: "",
      _3_2_7: "",
      _3_2_8: "",
      _3_2_9: "",
      _3_2_10: "",
      _3_3: "",
      _3_4_1: "",
      _3_4_2: "",
      _3_4_3: "",
      _3_4_4: "",
      _3_4_5: "",
      _3_5: "",
      _3_6: ""
    });

    const newEntryStep04 = new entryStep04({
      Email: req.body.Email,
      _4_1: "",
      _4_2_1: "",
      _4_2_2: "",
      _4_2_3: "",
      _4_2_4: "",
      _4_2_5: "",
      _4_2_6: "",
      _4_2_7: "",
      _4_2_8: "",
      _4_2_9: "",
      _4_2_10: "",
      _4_3: "",
      _4_4_1: "",
      _4_4_2: "",
      _4_4_3: "",
      _4_4_4: "",
      _4_4_5: "",
      _4_4_6: "",
      _4_5: "",
      _4_6: ""
    });

    newEntry.save().then(respose => {
      newEntryStep01.save().then(response1 => {
        newEntryStep02.save().then(response2 => {
          newEntryStep03.save().then(response3 => {
            newEntryStep04.save().then(response4 => {});
          });
        });
      });

      res.status(200).json(respose);
    });
  });
});

router.post("/step01push", (req, res, next) => {
  const Email = req.body.user;

  entryStep01
    .findOneAndUpdate(
      { Email },
      {
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
        _1_6: req.body._1_6
      }
    )
    .then(foundUser => {
      res.status(200).json(foundUser);
    });
});

router.post("/step02push", (req, res, next) => {
  const Email = req.body.user;

  entryStep02
    .findOneAndUpdate(
      { Email },
      {
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
      }
    )
    .then(foundUser => {
      res.status(200).json(foundUser);
    });

});

router.post("/step03push", (req, res, next) => {
  const Email = req.body.user;

  entryStep03
    .findOneAndUpdate(
      { Email },
      {
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
      }
    )
    .then(foundUser => {
      res.status(200).json(foundUser);
    });


});

router.post("/step04push", (req, res, next) => {
  const Email = req.body.user;

  entryStep04
    .findOneAndUpdate(
      { Email },
      {
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
      }
    )
    .then(foundUser => {
      res.status(200).json(foundUser);
    });

});

router.post("/results", function(req, res, next) {
  let results = [];
  const Email = req.body.user;
  entryHome.findOne({ Email }).then(foundData => {
    results.push(foundData);
    entryStep01.findOne({ Email }).then(foundData1 => {
      results.push(foundData1);
      entryStep02.findOne({ Email }).then(foundData2 => {
        results.push(foundData2);
        entryStep03.findOne({ Email }).then(foundData3 => {
          results.push(foundData3);
          entryStep04.findOne({ Email }).then(foundData4 => {
            results.push(foundData4);
            res.status(200).json(results);
          });
        });
      });
    });
  });
});

router.post("/results/pdf", function(req, res, next) {
  const Email = req.body.user;

  axios.get(
    `https://hooks.zapier.com/hooks/catch/1031215/oh3wtdl?email=${Email}`, // jonas
    {}
  );
  res.status(200).json("200");
});

module.exports = router;
