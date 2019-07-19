const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/:tag',async(req,res,next)=>{
    try{
        const posts = await db.Posts.findAll({
            include:[{
                model:db.Hashtag,
                where : {name: decodeURIComponent(req.params.name)},
            },{
                model:db.User,
            }],
        });
        res.json(posts);
    }catch(e){
        console.error(e);
        next(e);
    }
});