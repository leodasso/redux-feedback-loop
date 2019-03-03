const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, resp) => {

    pool.query(`SELECT * FROM "feedback";`)

    .then( result => {resizeBy.send(result.rows)})

    .catch( error => {
        console.log('error with GET', error);
        resp.sendStatus(500);
    })
})

router.post('/', (req, resp) => {

    const feedback = req.body;
    console.log(feedback);
    
    pool.query(`
        INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)`, 
        [feedback.feelings, feedback.understanding, feedback.support, feedback.comments])

    .then( response => {resp.sendStatus(201)})

    .catch( error => {console.log('error with feedback POST', error)});
})

module.exports = router;