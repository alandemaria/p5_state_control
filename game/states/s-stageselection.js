//GLOBAL STATE VARIABLES
var indicador = 1; // CONTROLS MENU SELECTION
var estado = 0; // CONTROLS STAGES
//

var stageSelection = new State();

var chooseStage_txt1 = {};
var chooseStage_txt2 = {};
var chooseStage_txt3 = {};
var indicationBall = {};

chooseStage_txt1.draw = function() {
    fill(255);
    textSize(32);
    text("Selecione a fase: ", 20, 50);
};
chooseStage_txt1.oi = 'oi1';


chooseStage_txt2.draw = function() {
    textSize(20);
    fill(255);
    text("Fase 1", 60, 100);
};
chooseStage_txt2.oi = 'oi2';


chooseStage_txt3.draw = function() {
    textSize(20);
    fill(255);
    text("Fase 2", 60, 150);
};
chooseStage_txt3.oi = 'oi3';

indicationBall.draw = function() {

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

}
indicationBall.oi = 'oi4';

stageSelection.elementArray.push(chooseStage_txt1);

stageSelection.elementArray.push(chooseStage_txt2);

stageSelection.elementArray.push(chooseStage_txt3);

stageSelection.elementArray.push(indicationBall);