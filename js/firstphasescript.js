
var canvas = document.documentElement;//o elemento canvas sobre o qual desenharemos
var myCanvas = document.documentElement;
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 40;//a tava de variação (velocidade) horizontal do objeto
var dy = 23;//a tava de variação (velocidade) vertical do objeto
var dx1 = 36;
var dy1 = 52;
var x = 250;//posição horizontal do objeto (com valor inicial)
var y = 92;//posição vertical do objeto (com valor inicial)
var WIDTH = 800;//largura da área retangular
var HEIGHT = 350;//altura da área retangular
var fundoImg = new Image();
var block = new Image();
var aqua = new Image();
var click = 0;
var j;
var v;
block.src = '../imagens/17.png';
aqua.src = '../imagens/aqua.png';
function retornoX(j) {
    z = j;
    return z;
}
function retornoY(k) {
    u = k;
    return u;
}
function DesenharBlock() {
    ctx.drawImage(block, retornoX(252), retornoY(120));
}
function Desenhar() {
    ctx.drawImage(aqua, x, y);
}
function fundo(){
    fundoImg.src = '../imagens/11.png';
    ctx.drawImage(fundoImg, 0, 0);  
}
function LimparTela() {
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    fundo();
}

function KeyDown(evt) {
    switch (evt.keyCode) {
        case 38:  //seta para cima 
            if (y - dy > 0) {
                y -= dy;
            }
            break;
        case 40:  //set para baixo
            if (y + dy < HEIGHT) {
                y += dy;
            }
            break;
        case 37:  //set para esquerda
            if (x - dx > 0) {
                x -= dx;
            }
            break;
        case 39:  //seta para direita
            if (x + dx < WIDTH) {
                x += dx;
            }
            break;
    }
}
function MoveUp() {
    if (y - dy > 0) {
        y -= dy1;
        x+=dx1;
    }
}
function MoveDown() {
    if (y + dy < HEIGHT) {
        y += dy1;
        x-=dx1;
    }
}
function MoveLeft() {
    if (x - dx > 0) {
        x -= dx;
        y-=dy;
    }
}
function MoveRight() {
    if (x + dx < WIDTH) {
        x += dx;
        y+=dy;
    }
}

function Atualizar() {
    LimparTela();
    DesenharBlock();
    Desenhar();
}
function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 10);
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}
function get() {
    var ids = [];
    var children = document.getElementById("div2").children; //get container element children.
    for (var i = 0, len = children.length; i < len; i++) {
        children[i].className = 'new-class'; //change child class name.
        ids.push(children[i].id); //get child id.
    }
        if (ids[j] == "img2") {
                MoveRight();
        } else if (ids[j] == "img3") {
                MoveLeft();
        } else if (ids[j] == "img4"){
                MoveUp();
        } else if(ids[j] == "img5"){
                MoveDown();
        }else if (ids[j] == "img6") {
            MoveRight();
    } else if (ids[j] == "img7"){
            MoveRight();
    } else if(ids[j] == "img8"){
            MoveDown();
    }
        j++;
        console.log("ta indo crl")
}

function interno(){
    clearInterval(v);
    j = 0;
    v = setInterval(get, 800);
}
window.addEventListener('keydown', KeyDown, true);
Iniciar();

/* abrir e fechar pop-up */

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function conf() {
    alert("Procedimento concluído com êxito.")
}
document.getElementById("myMenu").onclick() = function(){menu()}
function menu() {
    click++;
    if(click % 2 == 0){
        document.getElementById("myMenu").style.display = "none";
    }else{
        document.getElementById("myMenu").style.display = "block";
    }
}
