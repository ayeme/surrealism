


function bandSearch() 
{

	input = document.getElementById("userInput");
	console.log(input)
		//var bandInput = bandSearch();
		var artistName = input.innerHTML;	  // Notice you have to use "%20" instead of a space. It's called double escaped text. Look it up.
		var url = "http://api.bandsintown.com/artists/" + // This is the base url.
				  artistName +							  // Add artist name
				  "?app_id=giggoers&api_version=2.0&format=json&callback=?" // This is tells BIT who you are (api_id) and what format you want (JSON)

		$.getJSON(url, function(response) {
			console.log(response);
  			document.getElementById("image").src = response.image_url;
		})

	return input;

}

