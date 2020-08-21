function btcanc() {
    alert("Procedimento cancelado!")
    window.location.replace("/");
}

function btconf() {
	
    
    window.location.replace("/cadastro");
	
}
var password = document.getElementById("password")
, confirm_password = document.getElementById("confirm_password");

function validatePassword(){
if(password.value != confirm_password.value) {
  confirm_password.setCustomValidity("Senha incorreta");
} else {
  confirm_password.setCustomValidity('');
}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;