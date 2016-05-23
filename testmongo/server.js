"use strict";

let express = require('express');
let app = express();

let mongoUtil = require('./mongoUtil');
mongoUtil.connect();

// serve static files
app.use(express.static(__dirname));

app.get('/recipes', (req,res)=>{
    let recipes = mongoUtil.recipes();
    recipes.find().toArray((err,docs)=>{
        if(err){
            res.sendStatus(400);
        }
        console.log(JSON.stringify(docs));
        let recipes = docs.map((r)=>r.name);
        res.json(recipes);
    });
});

app.get('/recipes/:name', (req,res)=>{
    let recipeName = req.param.name;

    let recipes = mongoUtil.recipes();
    recipes.find({"name": recipeName}).limit(1).next((err,doc)=>{
        if(err){
            res.sendStatus(400);
        }
        console.log('Recipe found ',doc);
        res.json(doc);
    });
});

app.post('/recipes', (req,res)=>{
    let recipes = mongoUtil.recipes();
    recipes.insert(req.param).next((err,doc)=>{
        if(err){
            res.sendStatus(400);
        }
        console.log('Recipe created ',doc);
    });
});

app.put('/recipes/:name', (req,res)=>{
    let recipeName = req.param.name;
    let data = req.body.recipe || {};

    let recipes = mongoUtil.recipes();
    let query = {name: recipeName};

    recipes.update(query,data).next((err,doc)=>{
        if(err){
            res.sendStatus(400);
        }
        console.log('Recipe created ',doc);
    });
});

app.listen(8181, ()=>console.log('listening 8181'));
