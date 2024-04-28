const express = require('express');
const router = express.Router();
const setupUser = require("../model/setupUser")
const userservice = require('../service/userslogin')
const User = require('../model/beanClasses/users')
const HotDeal=require('../model/beanClasses/hotDeal')
const Pkg=require('../model/beanClasses/pkgModel')
router.get("/setup", (req, res, next) => {
    setupUser.userSetup().then((data) => {
        res.send(data)
        res.status=200;
    }).catch(err => next(err));
})

//Router to get the Hot Deals
router.get('/hotDeals', function (req, res, next) {    
    userservice.hotDeals().then(function (hotDeals) {
        res.json(hotDeals);
        res.status=200;
    }).catch(err => next(err));
})
//Router to Pkg details
router.get('/destinations', function (req, res, next) {    
    userservice.destinations().then(function (destination) {
        res.json(destination);
        res.status=200;
    }).catch(err => next(err));
})
//router for search
router.get('/destinations/:continent', function (req, res, next) {
    let continent = req.params.continent;
    userservice.getSearch(continent).then(function (getSearchData) {
        res.json(getSearchData);
        res.status=200;
    }).catch(err => next(err));
})
//add new Hotdeal
router.post('/hotDeals',function(req,res,next){
    hotdeal=new HotDeal(req.body);
    userservice.pushHotDeals(hotdeal).then(function(deal){
        res.json(deal);
        res.status=200;
    }).catch(err=>next(err))
})
//add new Package
router.post('/package',function(req,res,next){
    hotdeal=new HotDeal(req.body);
    // console.log(hotdeal);
    userservice.pushPackages(hotdeal).then(function(deal){
        // console.log(deal);
        res.json(deal);
        res.status=200;
    }).catch(err=>next(err))
})
router.delete('/hotDeals/:hdid',function(req,res,next){
    let hotdeal=req.params.hdid;
    userservice.deleteHotDeals(hotdeal).then(function(deal){
        res.json(deal);
        res.status=200;
    }).catch(err=>next(err))
})
//add new Package
router.delete('/package/:pkgid',function(req,res,next){
    let pkg=req.params.pkgid;
    userservice.deletePackages(pkg).then(function(deal){
        res.json(deal);
        res.status=200;
    }).catch(err=>next(err))
})
module.exports = router;

