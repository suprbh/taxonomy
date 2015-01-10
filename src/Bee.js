var Bee = function(age, color, job) {
	this.job = job;
	this.age = 5;
	this.color = 'yellow';
	Grub.call(this);
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
