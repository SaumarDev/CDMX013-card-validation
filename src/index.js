import validator from './validator.js';

let creditCardNumber = document.getElementById("numberCard")
creditCardNumber.addEventListener("change", function(){
if(validator.isValid(creditCardNumber.value)){
    document.getElementById("isValidate").innerText = "La tarjeta es válida"
    document.getElementById("isValidate").style.color = "green"
}else{
    document.getElementById("isValidate").innerText = "La tarjeta es inválida"
    document.getElementById("isValidate").style.color = "red";
}

//Llamamos a maskify
let maskifiedValue = validator.maskify(creditCardNumber.value)
document.getElementById("numberCard").value = maskifiedValue
});


    

    