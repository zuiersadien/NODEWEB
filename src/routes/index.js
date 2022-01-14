const express =require('express');
const router=express.Router();



router.get('/',(req,res)=>{
    res.render('index.ejs',{title:'first website'})
 })

router.get('/contact',(req,res)=>{
    res.render('contact',{title:'contact website'})
 })


 module.exports=router;
 

