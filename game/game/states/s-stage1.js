// inicializando estado1
var stage1 = new State();

var inimigo = new Inimigo(300, 300);

var character = new Char(40, 300);

var health = new healthBar(character.health);

stage1.elementArray.push(character);
stage1.elementArray.push(health);
stage1.elementArray.push(inimigo);