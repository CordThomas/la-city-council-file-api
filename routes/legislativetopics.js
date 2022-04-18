const db = require('../database.js');
const express = require('express'),
    router = express.Router();

// Get the list of legislative topics
router.get("/", (req, res, next) => {
    let sql = "select * from legislative_topic ORDER by topic_label"
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

module.exports = router;