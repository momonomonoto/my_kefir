const express = require('express');

const router = express.Router();
const translator =  require('../translator/index');

function setRouter() {
    router.get('/', (req,res)=>{
        res.render('layout.pug');
    });
    router.post('/', (req,res)=>{
        console.log('hello post')
        translator.getWord('hello',req,res);
    });

    return router;
}
const resultRouter = setRouter();
module.exports = resultRouter;
