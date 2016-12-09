//objeto barra
function healthBar(h) {
    this.health = h;
    return this;
};

healthBar.prototype.draw = function() {
    rect(30, 30, 22, 120);
    fill("Red");
    rect(32, 32, 18, this.health);
};