var SuperAnimal = function(name){
    this.privateName = name;
    this.privateHello();
};

SuperAnimal.prototype.hello = function(){
    console.log('Hello ' + this.privateName);
};

SuperAnimal.prototype.privateHello = function(){
    console.log('Private hello ' + this.privateName);
};

var Animal = privatize(SuperAnimal, ['privateHello']);

var animal = new Animal('Сow');

console.log(animal);
animal.hello()