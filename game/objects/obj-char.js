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

Char.prototype.damage = function(dam, stage) {
    this.health -= dam;
    stage.elementArray[1].health = this.health;
}

Char.prototype.colisao = function(listaInimigos, stage) {
    listaInimigos.forEach(function(element) {
        var x = this.x - element.x;
        var y = this.y - element.y;
        var dist = moduloVetor(x, y);
        if (dist < 30) {
            this.damage(30, stage);
            this.x -= 80;
        }
    }, this);
}