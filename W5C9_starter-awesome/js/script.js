$(document).ready(function(){	
	/*********** PUT THINGS HERE ****************/

	/****** QUESTION 1 ************/

	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}

    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string

	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = questionText.charAt(questionText.length-2);
	}


	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not


    //get answer//

	/****** QUESTION 4 ************/
	// Reverse string inputted by user

	document.getElementbyId('reverseString_submit').onclick = function() {
		var text = document.getElementbyId('reverseString_input').value;
		document.getElementbyId('reverse_display').innerHTML = reverseString(text);
	}

	function reverseString(str) {
		return str.split("").reverse().join("");
	}

	//check Javascript on this one

	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable
	$("helloworld_submit").click(function() {
		var hello = "HELLO WORLD";
		$()
	}



	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display
	$('#greet1_submit').click(function() {
		var name = $("#greet1_input").val();
		$("#greet1_display").html("Hi "+name+" welcome to the website");
	});


	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME

	$('#greet2_submit').click(function() {
		var nameInput = $("#greet2_input").val();
			nameInput = nameInput.toLowercase();
		var
		$("#greet1_display").html("Hi "+name+" welcome to the website");
	});

	/****** QUESTION 8 ************/
	// Accept two integers from the user and display the larger
	var num1 = document.getElementbyId('integerSign_input1').value;
	var num2 = document.getElementbyId('integerSign_input1').value;
	



	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)
	$("#integerSign_submit").click(function(){
		var value1 = $('#integerSign_input1').val();
		var value2 = $('#integerSign_input1').val();
		var value3 = $('#integerSign_input1').val();
		var product = value1 * value2 * value3;
		var productSign = Math.sign(product);

		if (productSign == -1) {
			$("integerSign_display").html("-");
		}

		else {
			$("#integerSign_display").html("+");
		}
	

	/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest



	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function



	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user



	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****	

	


	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"
	

});	