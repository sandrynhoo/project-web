function btcanc() {
    alert("procedimento cancelado!")
    window.location.replace("/mostra");
}

function btconf() {
    alert("Procedimento concluído com êxito!")
    window.location.replace("/mostra");
}
var password = document.getElementById("password")
, confirm_password = document.getElementById("confirm_password");

var lastpass = document.getElementById("lastpass")
, verify = document.getElementById("verify")

function validatePassword(){
if(password.value != confirm_password.value) {
  confirm_password.setCustomValidity("Senha incorreta");
} else {
  confirm_password.setCustomValidity('');
}
}
function verifyPassword(){
	if(lastpass.value != verify.value){
		verify.setCustomValidity("Repita a senha anterior");
	}
	else{
		verify.setCustomValidity('');
	}
	
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

lastpass.onchange = verifyPassword;
verify.onkeyup = verifyPassword;