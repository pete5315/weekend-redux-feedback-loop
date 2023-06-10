const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.post('/',  (req, res) => {
//   let newFeedback = req.body.currentInfo.currentInfo;
//   console.log(`Adding feedback`, newFeedback);

//   let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
//     VALUES ($1, $2, $3, $4)`;
//   pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
//     .then(result => {
//       res.sendStatus(201);
//     })
//     .catch(error => {
//       console.log(`Error adding feedback`, error);
//       res.sendStatus(500);
//     });
// });

router.post('/', async (req, res) => {
  console.log('req.body', req.body.currentInfo.currentInfo);
      const {
          feeling,
          understanding,
          support,
          comments
      } = req.body.currentInfo.currentInfo;
      let queryText= `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
      VALUES ($1, $2, $3, $4);`;
      pool.query(queryText, [feeling, understanding, support, comments])
      .then(result => {
        console.log("query added")
        res.sendStatus(201);
      })
      .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
      });
});

module.exports = router;