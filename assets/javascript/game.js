
//Variables needed:
//var randomNo that will hold the randomly generated number the user is trying to match.
var randomNo=Math.floor((Math.random() * 120) + 19);
//var holding the randomly generated amount for crystalOne
var crystalOneValue=Math.floor((Math.random() * 12) + 1);
//var holding the randomly generated amount for crystalTwo
var crystalTwoValue=Math.floor((Math.random() * 12) + 1);
//var holding the randomly generated amount for crystalThree
var crystalThreeValue=Math.floor((Math.random() * 12) + 1);
//var holding the randomly generated amount for crystalFour
var crystalFourValue=Math.floor((Math.random() * 12) + 1);
//var holding the total amount of the user guess
var userGuess=0;
//var holding number of wins
var wins;
//var holding number of losses
var losses;

//onload
$(document).ready(function() {
//Computer generates a random number between 19 and 120
$("#randomNo").html(randomNo);
//each button is assigned a random number between 1 and 12
console.log(crystalOneValue);
console.log(crystalTwoValue);
console.log(crystalThreeValue);
console.log(crystalFourValue);

wins=0;
$("#wins").html(wins);

losses=0;
$("#losses").html(losses);

$("#yourScore").text(userGuess);


//onclick
//the amount that that button is worth is added to the number in the user guess div
$("#crystalOne").on("click", function() {
	userGuess= parseInt(userGuess) + parseInt(crystalOneValue);
	$("#yourScore").text(userGuess);
});
$("#crystalTwo").on("click", function() {
	userGuess= parseInt(userGuess) + parseInt(crystalTwoValue);
	$("#yourScore").text(userGuess);
});
$("#crystalThree").on("click", function() {
	userGuess= parseInt(userGuess) + parseInt(crystalThreeValue);
	$("#yourScore").text(userGuess);
});
$("#crystalFour").on("click", function() {
	userGuess= parseInt(userGuess) + parseInt(crystalFourValue);
	$("#yourScore").text(userGuess);
});


//when the number equals the randomly generated number
$(".button").on("click", function() {
	if (userGuess===randomNo) {
		//alert
		alert("You got the correct number!");
		//the number of wins goes up
		wins++;
		$("#wins").html(wins);
	//resets
		//chooses a new number
		randomNo=Math.floor((Math.random() * 120) + 19);
		$("#randomNo").html(randomNo);
		//chooses new button values
		 crystalOneValue=Math.floor((Math.random() * 12) + 1);
		//var holding the randomly generated amount for crystalTwo
		 crystalTwoValue=Math.floor((Math.random() * 12) + 1);
		//var holding the randomly generated amount for crystalThree
		 crystalThreeValue=Math.floor((Math.random() * 12) + 1);
		//var holding the randomly generated amount for crystalFour
		 crystalFourValue=Math.floor((Math.random() * 12) + 1);
		 //userGuess goes back to 0
		 userGuess=0;
		 $("#yourScore").text(userGuess);
	}
//if the number goes over the randomly generated number
	//the number of losses goes up
	//resets
	else if (userGuess > randomNo) {
		alert("You went over!");
		losses++;
		$("#losses").html(losses);
		//resets
		//chooses a new number
		randomNo=Math.floor((Math.random() * 120) + 19);
		$("#randomNo").html(randomNo);
		//chooses new button values
		 crystalOneValue=Math.floor((Math.random() * 12) + 1);
		 console.log(crystalOneValue);
		//var holding the randomly generated amount for crystalTwo
		 crystalTwoValue=Math.floor((Math.random() * 12) + 1);
		 console.log(crystalTwoValue);
		//var holding the randomly generated amount for crystalThree
		 crystalThreeValue=Math.floor((Math.random() * 12) + 1);
		 console.log(crystalThreeValue);
		//var holding the randomly generated amount for crystalFour
		 crystalFourValue=Math.floor((Math.random() * 12) + 1);
		 console.log(crystalFourValue);
		 //userGuess goes back to 0
		 userGuess=0;
		 $("#yourScore").text(userGuess);
	}
	



});

});

