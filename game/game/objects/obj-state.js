//objeto estado
function State() {
    this.elementArray = [];
    return this;
};

State.prototype.draw = function() {
    this.elementArray.forEach(function(element) {
        element.draw();
    }, this);
};