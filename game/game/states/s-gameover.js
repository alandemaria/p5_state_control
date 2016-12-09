var gameOver = new State();

var gameover_txt1 = {}
gameover_txt1.draw = function() {
    background("Red");
    fill(0);
    textSize(32);
    text("Lose!", 20, 50);
};

gameOver.true = false;

gameOver.elementArray.push(gameover_txt1);