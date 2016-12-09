//GAME SETUP CONFIGS
function setup() {
    createCanvas(400, 400);
    background(0);
};
//

//GAME LOOP
function draw() {
    switch (estado) {
        case 1:
            if (gameOver.true) {
                gameOver.draw();
                if (keyIsDown(ENTER)) {
                    setTimeout(function() {
                        gameOver.controller();
                        estado = 0;
                        gameOver.true = false;
                    }, 200);
                }
            } else {
                stage1.controller();
                stage1.draw();
            };
            break;
        case 2:
            state2();
            break;
        default:
            stageSelection.controller();
            stageSelection.draw();
    }
};
//