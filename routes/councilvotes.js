const db = require('../database.js');
const express = require('express'),
    router = express.Router();

// Get the list of most recent 10 council votes
router.get("/", (req, res, next) => {
    let sql = "select * from council_vote ORDER BY meeting_date DESC LIMIT 10"
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

// Get the council vote result related to the council file, cf_num
router.get("/file/:cf_num", (req, res, next) => {
    let sql = "select * from council_vote where cf_number = ?"
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

module.exports = router;