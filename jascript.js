function passCheck()
{
	var x = document.getElementById("pass_word").innerHTML;
	var y = document.getElementById("password_confirm").innerHTML;
	console.log(x)
	if (x.length < 4)
	{
		alert("Your password is not long enough");
	}
	else if (x != y)
	{
		alert("Your passwords do not match. Try again.");
	}
}


function bandSearch() 
{

	var input = document.getElementById("userInput");
	return input;

}

