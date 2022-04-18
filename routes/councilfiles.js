const db = require('../database.js');
const express = require('express'),
    router = express.Router();

// Root endpoint
router.get("/", (req, res, next) => {
    res.json({"message": "Ok"})
});

// Insert here other API endpoints
router.get("/", (req, res, next) => {
    let sql = "select * from council_file ORDER BY date_received DESC LIMiT 10"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Get a single council file by number
router.get("/file/:cf_num", (req, res, next) => {
    let sql = "select * from council_file where cf_number = ?"
    let params = [req.params.cf_num]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

// Get the list of council files where the title contains the provided text string
router.get("/title_contains/:match_text", (req, res, next) => {
    let sql = "select * from council_file where title like ?"
    let params = ['%' + req.params.match_text + '%']
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Get the list of council file where since the start_date
router.get("/since/:start_date", (req, res, next) => {
    let sql = "select * from council_file where date_received >= ?"
    let params = [req.params.start_date]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Get the list of council files between the start and end date - exclusive
router.get("/between/:start_date/:end_date", (req, res, next) => {
    let sql = "select * from council_file where date_received >= ? and date_received <= ?"
    let params = [req.params.start_date, req.params.end_date]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

router.get("/mover/:mover", (req, res, next) => {
    let sql = "select * from council_file where mover = ?"
    let params = [req.params.mover]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Get the list of council files who's mover is mover and second is second
router.get("/mover_and_seconder/:mover/:second", (req, res, next) => {
    let sql = "select * from council_file where mover = ? and second = ?"
    let params = [req.params.mover, req.params.second]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Get the list of council files where the council_district is council.   Council district is normally
// a single value when one is present but can also be a comma-separated list of district numbers.
router.get("/council/:council", (req, res, next) => {
    let sql = "select * from council_file where council_district IN (?)"
    let params = [req.params.council]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    });
});

// Get the list of council files that contain the list of topic IDs from legislative topics
router.get("/topics/:topics", (req, res, next) => {
    let sql = "select cf.*, lt.topic_id from council_file cf join council_file_legislative_topic lt on " +
        "cf.cf_number = lt.cf_number WHERE lt.topic_id IN ?"
    let params = [req.params.topics.split(',')];
    console.log(params);
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    });
});

module.exports = router;