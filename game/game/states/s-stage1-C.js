var lista = [];
lista.push(inimigo);
var ashoot;
var bshoot;

stage1.controller = function() {
    background(0);
    character.moveTrigger();

    bshoot = character.shoot()

    if (bshoot) {
        setTimeout(function() {
            ashoot = new Fire(character.x, character.y);
            stage1.elementArray.push(ashoot);
            ashoot = {};
            bshoot = false;
        }, 0);
    };

    /*   // eliminar os tiros que já passaram
       setTimeout(function() {
           var i = stage1.elementArray.length
           for (; i > 3; i--) {
               stage1.elementArray.pop();
           }
       }, 3000); */

    character.colisao(lista, stage1);
    if (character.health <= 0) {
        gameOver.true = true;
    }

};