var lista = [];
lista.push(inimigo);

stage1.controller = function() {
    background(0);
    character.moveTrigger();
    character.colisao(lista, stage1);
    if (character.health <= 0) {
        gameOver.true = true;
    }
};

/*
    stage1.draw();
    */