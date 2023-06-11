const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/send", async (req, res) => {
  console.log("req.body", req.body.currentInfo.currentInfo);
  const { feeling, understanding, support, comments } =
    req.body.currentInfo.currentInfo;
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
      VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [feeling, understanding, support, comments])
    .then((result) => {
      console.log("query added");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});

router.get("/history", (req, res) => {
  console.log("get");
  pool
    .query('SELECT * FROM "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/history", error);
      res.sendStatus(500);
    });
});

router.delete("/delete/:id", (req, res) => {
  const feedbackId = req.params.id;
  let sqlText = `DELETE FROM "feedback" WHERE id = $1;`;
  //send the query to SQL
  pool
    .query(sqlText, [feedbackId])
    //if SQL doesn't error
    .then((result) => {
      console.log("feedback deleted");
      res.sendStatus(200);
    })
    //if SQL DOES error
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END POST Route

// PUT Route
router.put('/flag/:id', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const feedbackId = req.params.id;
  let flag = req.body.data;
  let sqlText = `UPDATE "feedback" SET "flagged" = $1 WHERE id = $2;`;
  //send the query to SQL
  pool.query(sqlText, [flag, feedbackId])
  //if SQL doesn't error
  .then( (result) => {
      console.log('Like added')
      res.sendStatus(200);
  })
  //if SQL DOES error
  .catch( (error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
  })}); // END PUT Route

module.exports = router;
