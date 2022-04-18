const db = require('../database.js');
const express = require('express'),
    router = express.Router();

// Get the most recent 10 council documents
router.get("/", (req, res, next) => {
    let sql = "select * from council_document ORDER BY action_date DESC LIMiT 10"
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

// Get the council file documents by CF number
router.get("/file/:cf_num", (req, res, next) => {
    let sql = "select * from council_document where cf_number = ?"
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