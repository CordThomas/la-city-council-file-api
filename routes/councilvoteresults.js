const db = require('../database.js');
const express = require('express'),
    router = express.Router();

// Get the list of most recent 10 council vote results
router.get("/", (req, res, next) => {
    let sql = "select * from council_vote_result ORDER BY cf_number DESC LIMIT 10"
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

// Get the council votes related to the council file, cf_num
router.get("/file/:cf_num", (req, res, next) => {
    let sql = "select * from council_vote_result where cf_number = ?"
    let params = [req.params.cf_num]
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