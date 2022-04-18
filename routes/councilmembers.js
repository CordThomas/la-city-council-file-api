const db = require('../database.js');
const express = require('express'),
    router = express.Router();

// Get the list of current council members
router.get("/", (req, res, next) => {
    let sql = "select * from council_district_member WHERE end_date is null ORDER BY name_last, name_first"
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

// Get the City Council Members that were in office on the date
router.get("/in_office_on/:office_date", (req, res, next) => {
    let sql = "select * from council_district_member where start_date >= ? and (end_date is null or end_date < ?"
    let params = [req.params.office_date]
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