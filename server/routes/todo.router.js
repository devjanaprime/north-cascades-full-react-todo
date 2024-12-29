const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get( '/', ( req, res )=>{
    console.log( '/api/todo GET' );
    const queryString = `SELECT * FROM "todos" ORDER BY id ASC;`;
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 );
    })
})

// POST
router.post( '/', ( req, res )=>{
    console.log( '/api/todo POST:', req.body, req.query );
    const queryString = `INSERT INTO "todos" ("name", "priority", "created") VALUES ( $1, $2, NOW() );`;
    const values = [ req.body.name, req.body.priority ];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 );
    })
})

// PUT
router.put( '/', ( req, res )=>{
    console.log( '/api/todo PUT:', req.body, req.query );
    const queryString =` UPDATE "todos" SET completed=NOW() WHERE id=$1;`;
    const values = [ req.query.id ]; 
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 400 );
    })
})

// DELETE
router.delete( '/', ( req, res )=>{
    console.log( '/api/todo DELETE:', req.body, req.query );
    const queryString =` DELETE FROM "todos" WHERE id=$1;`;
    const values = [ req.query.id ];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 );
    })
})

module.exports = router;
