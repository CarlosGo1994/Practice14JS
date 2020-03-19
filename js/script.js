'use strict'

/*
 Show every odd numbers there are between two numbers user input 
*/

var number = parseInt(prompt("Enter a first number:",0));

var number2 = parseInt(prompt("Enter a second number:",0));

document.write("<h2>Odd numbers from " + number + " to " + number2 + ": </h2> ");
for (var i = number; i <= number2; i++)
{   
    
    var result = i % 2;

    if(result == 1)
    {
        document.write(i + "<br>");
    }

}
