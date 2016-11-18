// DOWN BELOW: OBJECT DEFINITION (METHODS AND PROPERTIES)
function objeto(x, y) {
    this.x = x;
    this.y = y;
    return this;
}

objeto.prototype.mover = function(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
}

objeto.prototype.desenha = function() {
    fill("blue")
    rect(this.x, this.y, 30, 30);
}

objeto.prototype.movimenta = function() {
    if (keyIsDown(LEFT_ARROW)) {
        this.mover(-5,0);
    };

    if (keyIsDown(RIGHT_ARROW)) {
        this.mover(5,0);
    };

    if (keyIsDown(UP_ARROW)) {
        this.mover(0,-5);
    };

     if (keyIsDown(DOWN_ARROW)) {
        this.mover(0,+5);
    };
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
            fill(random(1,255))
            ellipse(45, 93, 10, 10);
            break;
        case 2:
            fill(random(1,255))
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

//STAGE 1 MOCK
function state1() {
    //background(0);
    player.desenha();
    player.movimenta();
}
//

// STAGE 2 MOCK
function state2() {
    background(200);
}
//

//GLOBAL STATE VARIABLES
var indicador = 1; // CONTROLS MENU SELECTION
var estado = 0; // CONTROLS STAGES
//

//CREATE THE PLAYER OBJECT
var player = new objeto(10, 350);
//

//GAME SETUP CONFIGS
function setup() {
    createCanvas(400,400);
    background(0);
}
//

//GAME LOOP
function draw() {
    switch (estado) {
        case 1:
            state1();
            break;
        case 2:
            state2();
            break;
        default:
            stateDefault();
    }
}
//