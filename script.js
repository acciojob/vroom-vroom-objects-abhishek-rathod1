// Complete the js code
function Car(make, model) {	
	this.make = make;
	this.model = model;
	
}
Car.prototype.getMakeMode(){
	return `${this.make} ${this.model}`;
}
//sports car constructor
function SportsCar(make, model, topSpeed) extends Car {
	Car.call(this,make, model);
	this.topspeed = topSpeed;
	
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed(){
		return this.topSpeed;
	}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
