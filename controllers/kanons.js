'use strict';

var Kanon=require('../models/kanonModel');

module.exports = function (router) {
    router.get('/', function (req, res) {
		Kanon.find({},function(err, kanons){
			if (err){
				console.log(err);
			}
			
			var model={
				kanons:kanons
			}
			//var dummymodel={
			//	kanons: {"name":"john", "url":"http://wwww.youtune.com"}
			//}
			//console.log(kanons);
			console.log(model);
			res.render('kanons/index', model); 
		});
	
		
    });
	
	router.get('/:id', function (req, res) {
        res.render('kanons/details');       
    });
	
	
};