 $(document).ready(function(){

	$("button").on("click", function() {
		//var type = "Kim+Kardashian"
		var person = $(this).attr("data-person");
		var queryURL = "https://api.giphy.com/V1/gifs/search?q=" + 
		  person + "&api_key=80e51c7585604a5d998eafe050d2b347C&limit=10";

		$.ajax({url: queryURL, method: 'GET'})
		 .done(function(gif){
		 	console.log(queryURL);
		 	console.log(gif);

		 	var results = response.data;
			

		 	for (var i = 0; i < results.length; i++) {
		 	  var gifDiv = $("<div class='item'>");

		 	  var rating = results[i].rating;

		 	  var p = $("<p>").text("Rating:" + rating);

		 	  var personImage = $("<img>");
		 	  personImage.attr("src", results[i].images.fixed_height.url);

		 	  gifDiv.prepend(p);
		 	  gifDiv.prepend(personImage);

		 	  $("#gifs-appear-here").prepend(gifDiv);
		 	}

		 });
		});
});








