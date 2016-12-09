function Fire(x, y) {
    this.x = x;
    this.y = y;
    return this;
};

Fire.prototype.move = function() {
    this.x += 10;
};

Fire.prototype.destroy = function() {};

Fire.prototype.draw = function() {
    fill("Green");
    rect(this.x, this.y + random(10), 5, 5);
    this.x >= 400 ? this.x = : this.move();
};