
var canvas = document.documentElement;//o elemento canvas sobre o qual desenharemos
var myCanvas = document.documentElement;
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 40;//a tava de variação (velocidade) horizontal do objeto
var dy = 23;//a tava de variação (velocidade) vertical do objeto
var dx1 = 36;
var dy1 = 42;
var x = 250;//posição horizontal do objeto (com valor inicial)
var y = 92;//posição vertical do objeto (com valor inicial)
var WIDTH = 800;//largura da área retangular
var HEIGHT = 350;//altura da área retangular
var fundoImg = new Image();
var block = new Image();
var aqua = new Image();
var click = 0;
var clic = 0;
var moves = 5;
var j;
var v;
var p = true;
var f = 0;
var q = 0;
var g = 0;
var b = false;
var textarea = document.querySelector('textarea');
var padrão = ' #include <stdio.h> \n// Isso é uma biblioteca, ela contêm funções pré-definidas, utilizadas nos programas';
var inicio = '\n\n int main(){ \n// Função principal de seu programa';
var fim = '\n\n return 0; \n// Finalização do programa\n\n }';
var code1 = retornoCodigo('\n\n printf("Você Venceu"); \n// Função responsável pela saída de dados de seu programa');
textarea.value = padrão;
block.src = '../imagens/30.png';
aqua.src = '../imagens/aqua.png';
fundoImg.src = '../imagens/11.png';
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
    win();
}
function fundo() {
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
    if (p == true) {
        if (y - dy > 0) {
            y -= dy1;
            x += dx1;
            inserirCodigo();
        }
    }
}
function MoveDown() {
    if (p == true) {
        if (y + dy < HEIGHT) {
            y += dy1;
            x -= dx1;
            inserirCodigo();

        }
    }
}
function MoveLeft() {
    if (p == true) {
        if (x - dx > 0) {
            x -= dx;
            y -= dy;
            inserirCodigo();

        }
    }
}
function MoveRight() {
    if (p == true) {
        if (x + dx < WIDTH) {
            x += dx;
            y += dy;
            inserirCodigo();

        }
    }
}
function Atualizar() {
    LimparTela();
    fundo();
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
    var nodeCopy = document.getElementById(data).cloneNode(true);
    ev.target.appendChild(nodeCopy);
    ev.dataTransfer.clearData();
    ev.stopPropagation();

}
function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var el = document.getElementById(data);
    el.parentNode.removeChild(el);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function get() {
    if (p = true) {
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
        } else if (ids[j] == "img4") {
            MoveUp();
        } else if (ids[j] == "img5") {
            MoveDown();
        } else if (ids[j] == "img6") {
            MoveRight();
        } else if (ids[j] == "img7") {
            MoveRight();
        } else if (ids[j] == "img8") {
            MoveDown();
        }
        j++;
    }
}

function interno() {
    if (p == true) {
        clearInterval(v);
        j = 0;
        v = setInterval(get, 800);
    }
}
window.addEventListener('keydown', KeyDown, true);
Iniciar();

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function conf() {
    alert("Procedimento concluído com êxito.")
}
$('h1').empty().append("chances: " + moves);
document.getElementById("get").onclick = function () { move() }
function move() {
    
        moves--;
        $('h1').empty().append("chances: " + moves);

    interno();
    if (moves < 0) {
        document.getElementById("myGameover").style.display = "block";
        $('h1').empty().append("chances: " + 0);
    } else {
        document.getElementById("myGameover").style.display = "none";
    }
}
document.getElementById("myMenu").onclick = function () { menu() }
function menu() {
    click++;
    if (click % 2 == 0) {
        document.getElementById("myMenu").style.display = "none";
    } else {
        document.getElementById("myMenu").style.display = "block";
    }
}
document.getElementById("myPause").onclick = function () { pause() }
function pause() {
    clic++;
    if (clic % 2 == 0) {
        document.getElementById("myPause").style.display = "none";
        p = true;
    } else {
        document.getElementById("myPause").style.display = "block";
        p = false;
    }
}
function win() {
    if (x == 370 && y == 161) {
        setTimeout(function () {
            return document.getElementById("myWin").style.display = "block";
        }, 1000);
    }
}
function inserirCodigo() {
    if (x == 290 && y == 115 && x + dx < WIDTH && f == 0) {
        textarea.value += inicio;
        f++;
    }
    if (y == 161 && x == 370 && x + dx < WIDTH && q == 0) {
        textarea.value += code1;
        q++;
    }
    if (x == 370 && y == 161 && x + dx < WIDTH && g == 0) {
        setTimeout(function () {
            textarea.value += fim;
        }, 1000);
        g++;
    }

}
function retornoCodigo(codigo) {
    var cod = codigo;
    return cod;
}
textarea.disabled = true;
