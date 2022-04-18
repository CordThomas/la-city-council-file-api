const db = require('../database.js');
const express = require('express'),
    router = express.Router();

// Get the list of most recent 10 councilactions
router.get("/", (req, res, next) => {
    let sql = "select * from council_action ORDER BY action_date DESC LIMIT 10"
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

// Get the council actions related to the council file, cf_num
router.get("/file/:cf_num", (req, res, next) => {
    let sql = "select * from council_action where cf_number = ?"
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

// Get the council actions with text snippet within the action description
router.get("/description_contains/:match_text", (req, res, next) => {
    let sql = "select * from council_action where description LIKE ?"
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

module.exports = router;