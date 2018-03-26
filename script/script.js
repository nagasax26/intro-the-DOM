//INDIVIDUAL EXERCISE
//Create a button that changes text when you click it and changes back when you click it again
//    .Hint: one possible solution uses an
//if statement.
var wasClicked = false;

function changeText() {
    if (!wasClicked) {
        document.getElementById('btn').innerHTML = "TEXT have changed!";
        wasClicked = true;
    } else {
        document.getElementById('btn').innerHTML = "Click ME to change text";
        wasClicked = false;
    }
}


document.getElementById("submit").onclick = submitForm;


function submitForm() {
    var user = {};
    user.username = document.getElementById('username').value;
    user.email = document.getElementById('email').value.toLowerCase();
    user.password = document.getElementById('password').value;
    user.rePassword = document.getElementById('rePassword').value;
    user.number = document.getElementById('number').value;
    user.country = document.getElementById('country').value.toLowerCase();

    validate(user);

}



function validate(obj) {
    var error = {};


    if (obj.username.length < 5)
        error.username = 'The supplied username is too short, try again using 5 or more characters';


    if (obj.password.length < 6)
        error.password = 'Password Must be 6 length least';

    if (obj.password != obj.rePassword)
        error.Match = 'Password Don\'t Match!';

    if (obj.country !== 'israel' && obj.country !== 'usa')
        error.country = 'country should be Israel or Usa';

    if (obj.username.length > 15)
        error.phone = 'Phone number shuld be less then 15 digit';

    var er = "";
    for (var i in error)
        er += error[i] + "<br>";
    if (er === '') {
        document.getElementById('validate').style.color = 'green';
        document.getElementById('validate').innerHTML = 'secssesfully passed';
    } else {
        document.getElementById('validate').style.color = 'red';
        document.getElementById('validate').innerHTML = er;
    }

}
