"use strict";

$(document).ready(function(){
	$("#hide").on("click",function(){ // code to trigger when hide button is clicked		
		$("form > *").hide(); // hide all form elements
		$("#show").prop("disabled",false); // enable show button
		$("#hide").prop("disabled",true); // disable hide button
	});
	$("#show").on("click",function(){	// code to trigger when show button is clicked			
		$("form > *").show(); // show all form elements
		$("#hide").prop("disabled",false); // enable hide button
		$("#show").prop("disabled",true); // disable show button
	});
});