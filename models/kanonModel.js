'use strict';

var mongoose=require('mongoose');

var kanonModel=function(){
	var kanonSchema=mongoose.Schema(
	{
		title: String,
		created_time: { type: Date, default: Date.now },
		created_by: String,
		items: {
			name: String,
			url:String,
			created_by:String,
			vote: Number,
			last_voted:{ type: Date, default: Date.now }
		}
	}
	);
	
	return mongoose.model('Kanon', kanonSchema);
}

module.exports= new kanonModel();