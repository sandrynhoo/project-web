
var canvas = document.documentElement;//o elemento canvas sobre o qual desenharemos
var myCanvas = document.documentElement;
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 5;//a tava de variação (velocidade) horizontal do objeto
var dy = 5;//a tava de variação (velocidade) vertical do objeto
var x = 250;//posição horizontal do objeto (com valor inicial)
var y = 100;//posição vertical do objeto (com valor inicial)
var WIDTH = 500;//largura da área retangular
var HEIGHT = 200;//altura da área retangular
var aqua = new Image();
var fundoImg = new Image();
aqua.src = '../imagens/aqua.png';

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
        y -= dy;
    }
}
function MoveDown() {
    if (y + dy < HEIGHT) {
        y += dy;
    }
}
function MoveLeft() {
    if (x - dx > 0) {
        x -= dx;
    }
}
function MoveRight() {
    if (x + dx < WIDTH) {
        x += dx;
    }
}

function Atualizar() {
    LimparTela();
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
    var a = null;

    for (let i = 0; i < children.length; i++) {
        if (ids[i] == "img2") {
            setTimeout(function () {
                MoveRight();
            }, 500);

        } else if (ids[i] == "img3") {
            //doSetTimeouRight();
            setTimeout(function () {
                MoveLeft();
            }, 500);
        }

        //if (ids[i] == "img2" && i > 0) {
        //  setTimeout(function() {
        //    MoveRight();
        //}, 1000)
        // }
        //if (ids[i] == "img3" && i > 0) {
        //   setTimeout(function() {
        //     MoveLeft();
        //  }, 1000);
        // }
        /*
        if (ids[i] == "img4" && i == 0) {
            setTimeout(function() {
                vazia();
            }, 1000);
            MoveUp();
        }
        if (ids[i] == "img4" && i > 0) {
            setTimeout(function() {
                MoveUp();
            }, 1000);
        }
        if (ids[i] == "img5" && i == 0) {
            setTimeout(function() {
                vazia();
            }, 1000);
            MoveDown();
        }
        if (ids[i] == "img5" && i > 0) {
            setTimeout(function() {
                MoveDown();
            }, 1000);
        }*/

    }
    ids = null;

}
window.addEventListener('keydown', KeyDown, true);
Iniciar();

