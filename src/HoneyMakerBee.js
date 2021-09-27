var HoneyMakerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = new Bee();

HoneyMakerBee.prototype.constructor = HoneyMakerBee;