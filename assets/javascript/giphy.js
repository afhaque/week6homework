//NEED TO DO
	//Create an array of things and make buttons for them
	//Create a form that takes a form submission and generates a new button from user input
	//Link to GIPHY API so that whatever button is clicked, 10!! gifs populate on the page, including buttons for new user input (push input into the proper array)
	//CLEAR THE DIV WHERE THE IMGS ARE DISPLAYED SO THAT THEY DON"T PILE UP
	//Create a function that plays/stops individual gif on click
	//Style?

//================== GLOBAL VARIABLES ================

//ARRAY FOR BUTTONS -- PUSH FORM SUBMISSIONS INTO THIS ARRAY TO ADD NEW BUTTONS
var birds = ['HAWK', 'EAGLE', 'PIGEON', 'DOVE', 'FALCON'];

	// Loop through birds array
	for (var i = 0; i < birds.length; i++) {
		
		// Create buttons
		var birdButton = $("<button id="+birds[i]+">"+birds[i]+"</button>");

		// Add a new attribute to the button 
		birdButton.attr("data-type", birds[i]);

		$("#birdButtons").append(birdButton);
};

//QUERY URL TO PULL FROM THE GIPHY API
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + birds + "&api_key=dc6zaTOxFJmzC ";
	//Q - QUERY, LIMIT - SHOULD BE 10 TO SHOW 10 GIFS PER BUTTON, RATING - SHOWS THE RATING OF THE GIF

//================== FUNCTIONS =======================

//THE AJAX CALL TO GET THE DATA FROM THE API
$.ajax({url: queryURL, method: 'GET'})

 .done(function(response) {

 	console.log(response)

 });







//===================== CALLS =======================