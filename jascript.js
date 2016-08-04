function passCheck()
{
	var x = document.getElementById("pass_word").innerHTML;
	var y = document.getElementById("password_confirm").innerHTML;
	console.log(x)
	if (x != y)
	{
		alert("Your passwords do not match. Try again.");
	}
	else
	{

	}
}


var input = document.getElementById("userInput").value;
