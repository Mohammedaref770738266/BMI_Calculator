// this function used to receive value from user and calculate BMI
function calculate_bmi() {
    var weight = prompt("Enter your weight in Kilograms\n");
    var height = prompt("Enter your height in meters\n");
    var bmi = weight/height**2;
    add_context("wieght",weight)
    add_context("height",height)
    add_context("bmi",bmi)
    return bmi
}

// This function is used to return the result of BMI
function interpret_bmi() {
    var result = calculate_bmi();
    if (result <18.5) {
        add_context("result","you are underweight")
    }
    else if(result >=18.5 && result < 25){
        add_context("result","you are in normal weight")
    }
    else if(result >=25 && result < 30){
        add_context("result","you are in overweight")
    }
    else
    add_context("result","you are obese stop eating")
}


// this function used to add the value to the text ex  weight :  =>  weight : 67
function add_context(id,new_text) {
    var ele = document.getElementById(id);
    var old_text = ele.textContent;
    ele.textContent = old_text + new_text;
}