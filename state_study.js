//objeto estado
function State() {
    this.elementArray = [];
    return this;
};

State.prototype.draw = function() {
    this.elementArray.forEach(function(element) {
        element.draw();
    }, this);
};
//--------------------------------------------------

//objeto barra
function healthBar(h) {
    this.health = h;
    return this;
};

healthBar.prototype.draw = function() {
    rect(30, 30, 20, 120);
    fill("Red");
    rect(32, 32, 20, this.health);
};

//objeto char --------------------------
function Char(x, y) {
    this.x = x;
    this.y = y;
    this.health = 100;
    return this;
};

Char.prototype.draw = function() {
    fill("blue");
    rect(this.x, this.y, 30, 30);
};

Char.prototype.move = function(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
}

Char.prototype.moveTrigger = function() {
    if (keyIsDown(LEFT_ARROW)) {
        this.move(-5, 0);
    };

    if (keyIsDown(RIGHT_ARROW)) {
        this.move(5, 0);
    };

    if (keyIsDown(UP_ARROW)) {
        this.move(0, -5);
    };

    if (keyIsDown(DOWN_ARROW)) {
        this.move(0, +5);
    };
};

Char.prototype.damage = function(dam) {
    this.health -= dam;
    fase1.elementArray[1].health = this.health;
}

Char.prototype.colisao = function(listaInimigos) {
    listaInimigos.forEach(function(element) {
        var x = this.x - element.x;
        var y = this.y - element.y;
        var dist = moduloVetor(x, y);
        if (dist < 30) {
            this.damage(5);
            this.x -= 80;
        }
    }, this);
}

function moduloVetor(x, y) {
    return Math.sqrt(x ** 2 + y ** 2);
};

function Inimigo(x, y) {
    this.x = x;
    this.y = y;
    this.health = 100;
    return this;
};

Inimigo.prototype.draw = function() {
    fill("Red");
    ellipse(this.x, this.y, 30, 30);
};

// inicializando estado1
var fase1 = new State();
var inimigo = new Inimigo(300, 300);
var lista = [];
lista.push(inimigo);
var character = new Char(40, 300);
var health = new healthBar(character.health);
fase1.elementArray.push(character);
fase1.elementArray.push(health);
fase1.elementArray.push(inimigo);


//GAME SETUP CONFIGS
function setup() {
    createCanvas(400, 400);
    background(0);
}
//

//STAGE SELECTION SCREEN
function stateDefault() {
    background(0);
    fill(255);
    textSize(32);
    text("Selecione a fase: ", 20, 50);

    textSize(20);
    fill(255);
    text("Fase 1", 60, 100);

    textSize(20);
    fill(255);
    text("Fase 2", 60, 150);



    if (keyIsDown(DOWN_ARROW) && indicador == 1) {
        indicador = 2;
    } else if (keyIsDown(UP_ARROW) && indicador == 2) {
        indicador = 1;
    };

    switch (indicador) { // desenha a bola do indicador
        case 1:
            fill(random(1, 255))
            ellipse(45, 93, 10, 10);
            break;
        case 2:
            fill(random(1, 255))
            ellipse(45, 143, 10, 10);
            break;
    };

    if (keyIsDown(ENTER)) { //selecao do estado
        switch (indicador) {
            case 1:
                estado = 1;
                break;
            case 2:
                estado = 2;
                break;
        }
    }

}
//

//GLOBAL STATE VARIABLES
var indicador = 1; // CONTROLS MENU SELECTION
var estado = 0; // CONTROLS STAGES
//



//GAME LOOP
function draw() {
    switch (estado) {
        case 1:
            background(0);
            character.moveTrigger();
            character.colisao(lista);
            fase1.draw();
            if (character.health <= 0) {
                character.health = 100;
                estado = 0;
            }
            break;
        case 2:
            state2();
            break;
        default:
            stateDefault();
    }
}
//
