function btcanc() {
    alert("Deseja mesmo cancelar o procedimento?")
    window.history.back();
}

function btconf() {
    alert("Procedimento concluído com êxito!")
    window.location.replace("index.html");
}

function btvalida(){
    
    senha = document.cad.senha.value;
    csenha = document.cad.confsenha.value;

    if (senha == csenha) {
        alert("CADASTRO REALIZADO COM SUCESSO");
    } else {
        alert("SENHAS INCOMPATÍVEIS");
    }
    window.location.replace("index.html");
}