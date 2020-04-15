var button = document.getElementByClass("open-button-log");
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function conf() {
    alert("Procedimento concluído com êxito.")
}
/*function closeFormBegin(){
    closeForm();
    if(button.onclick()){
    openForm();
    }
}*/