$(document).ready(function(){
	$("#grayButton").click(switchGray);
	$("#whiteButton").click(switchWhite);
	$("#tealButton").click(switchTeal);

	
	function switchGray(){
		$('body').css('background','gray');
		$('body').css("color", "white");

	}

	function switchWhite(){
		$('body').css('background','white');
		$('body').css("color", "black");
	}

	function switchTeal(){
		$('body').css('background','teal');
		$('body').css("color", "white");
	}

	
 });


