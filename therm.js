//function to convert the temperature to fahrenheit
function converttempC(temp) {
    let fahrenheit=0,celsius = temp;
    // computes the fahrenheit temperature
    fahrenheit = (temp * 9/5) + 32;   
    // adjusts the height of the thermometers degree line based on temperature
    setLineHeight(fahrenheit);

    document.getElementById("fahrenheit-temp").innerHTML = "<p>Fahrenheit: <br>"+fahrenheit+"<br>"+ parseInt(fahrenheit)+"</p>" ;
    // makes the color of the fahrenheit display box blue for cold, gray for pleasant, and red for hot
    if (fahrenheit > 32 && fahrenheit < 80) {
        document.getElementById("fahrenheit-temp").style.backgroundColor = 'gray';
    }
    else{
        if (fahrenheit <= 32) {
            document.getElementById("fahrenheit-temp").style.backgroundColor =  'steelblue';
        }
        else {
            document.getElementById("fahrenheit-temp").style.backgroundColor = 'crimson';
        }
    }   
    
    };
// function for converting the temperature to celsius
function converttemp(temp) {
    document.getElementById("celsius-temp").style.backgroundColor = 'gray'
    //computes the celsius
    let fahrenheit=temp,celsius = 0;
    celsius =  (temp - 32) * 5/9;   
    // adjusts the height of the thermometers degree line based on temperature
    setLineHeight(temp); 
    document.getElementById("celsius-temp").innerHTML = "<p>Celsius: <br>"+celsius+"<br>"+ parseInt(celsius)+"</p>" ;

    // makes the color of the fahrenheit display box blue for cold, gray for pleasant, and red for hot
    if (celsius > 0 && celsius < 27) {
        document.getElementById("celsius-temp").style.backgroundColor = 'gray';
    }
    else{
        if (celsius <= 0) {
            document.getElementById("celsius-temp").style.backgroundColor =  'steelblue';
        }
        else {
            document.getElementById("celsius-temp").style.backgroundColor = 'crimson';
        }
    }    
    
};


//function for sizing the degrees line in the thermometer
function setLineHeight(fahrenheit) {
    
    // Get the degreeline element by its ID
    var degreeline = document.getElementById('degreeline');
    
    // Set the height of the degreeline
    degreeline.style.height = fahrenheit * 5 + 'px';
}


 