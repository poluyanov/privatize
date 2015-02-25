var SuperAnimal = function(name){
    this.privateName = name;
    this.privateHello();
};

SuperAnimal.prototype.hello = function(){
    console.log(this.privateName);
};

SuperAnimal.prototype.privateHello = function(){
    console.log('privateHello' + this.privateName);
};

var Animal = privatize(SuperAnimal, ['privateHello'])

new Animal('Сow');

console.log(new Animal('Сow'))