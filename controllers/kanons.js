'use strict';

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('kanons/index');       
    });
	
	router.get('/:id', function (req, res) {
        res.render('kanons/details');       
    });
	
	
};