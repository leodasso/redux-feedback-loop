const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, resp) => {

    pool.query(`SELECT * FROM "feedback";`)

    .then( result => {resp.send(result.rows)})

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

    .catch( error => {
        console.log('error with feedback POST', error);
        resp.sendStatus(500);
    });
})


router.delete('/:id', (req, resp) => {

    pool.query(`
        DELETE FROM "feedback"
        WHERE "id" = $1;`, [req.params.id])

    .then( response => {resp.sendStatus(201)})

    .catch( error => {
        console.log('error with feedback DELETE', error);
        resp.sendStatus(500);
    });
});

module.exports = router;