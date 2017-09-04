 $(document).ready(function(){

 		var celebs = ["kim kardashian", "miley cyrus", "selena gomez"];
	 
		function displayPersonInfo() {
			
			var person = $(this).attr("data-person");
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + 
		  	person + "&api_key=dc6zaTOxFJmzC&limit=10";

		  //my key which would not work"api_key=80e51c7585604a5d998eafe050d2b347C&limit=10";

			$.ajax({url: queryURL, method: "GET"})
		 	.done(function(response) {
		 	  //logging data to confirm retrieval
		 	    console.log(queryURL)
		 		console.log(response)
		 	  var results = response.data;

		 	  for (var i = 0; i < results.length; i++) {
		 	  //div to hold gifs
		 	  var gifDiv = $("<div class='gifs'>");

		 	  var rated = results[i].rating;

		 	  var p = $("<p>").text("Rating:" + rated);

		 	  //var pcImage = response.images; 

		 	  var personImage = $("<img>")
		 	  personImage.attr("src", results[i].images.fixed_height_still.url);
		 	  
		 	  gifDiv.append(p);
		 	  gifDiv.append(personImage);

		 	  $("#pc-view").prepend(gifDiv);
		 	}
		});
	}
			
		function renderButtons() {

          // Deletes the celebs prior to adding new person
          // (this is necessary otherwise you will have repeat buttons)
          $("#buttons-celeb").empty();
          // Loops through the array of celebs
          for (var i = 0; i < celebs.length; i++) {

          	// Then dynamicaly generates buttons for each person in the array
          	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          	var a = $("<button>");
          	// Adds a class of person to our button
          	a.addClass("gifs");
          	// Added a data-attribute
          	a.attr("data-person", celebs[i]);
          	// Provided the initial button text
          	a.text(celebs[i]);
          	// Added the button to the buttons-celeb div
          	$("#buttons-celeb").append(a);
        }
      }
      	  //handles events where add celeb is clicked
      	  $("#addPC").on("click", function(event) {
      	  	event.preventDefault();
      	  	//will grab ibput from text box
      		var celeb = $("#pc-input").val().trim();
      	  	//person added to array
      		celebs.push(celeb);
      	  	//handles processing of our array
      		renderButtons();
		});

      		$(".gifs").on("click", function() {
      	  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          	  var state = $(this).attr("data-state");
      	  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      	  // Then, set the image's data-state to animate
      	  // Else set src to the data-still value
      		  if (state === "still") {
        		$(this).attr("src", $(this).attr("data-animate"));
        		$(this).attr("data-state", "animate");
      		  } else {
        	  	$(this).attr("src", $(this).attr("data-still"));
        		$(this).attr("data-state", "still");
      		  }
    	});
     
	  $(document).on("click", ".gifs", displayPersonInfo);
	  renderButtons();
		
});