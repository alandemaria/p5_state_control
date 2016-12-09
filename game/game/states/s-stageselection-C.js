stageSelection.controller = function() {
    background(0);
    if (keyIsDown(DOWN_ARROW) && indicador == 1) {
        indicador = 2;
    } else if (keyIsDown(UP_ARROW) && indicador == 2) {
        indicador = 1;
    };

    //stage selection

    if (keyIsDown(ENTER)) {
        switch (indicador) {
            case 1:
                estado = 1;
                break;
            case 2:
                estado = 2;
                break;
        }
    }


};