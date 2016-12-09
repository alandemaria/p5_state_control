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