"use strict";

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports={
    connect(){
        client.connect('mongodb://localhost:27017/madison', (err, db) =>{
            if(err) {
                console.log('error connecting', err);
                process.exit(1);
            }
            _db=db;
            console.log('connected!');
        })
    },
    recipes() {
        return _db.collection('recipes_v1');
    }
}
