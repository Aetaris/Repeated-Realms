
// Contains the Vector class

class Vector {
	constructor(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}

	theta() { // The angle of the vector relative to (0,0)
		return Math.atan2(this.y, this.x);
	}

	clone() { // Returns a copy of the vector
		return new Vector(this.x, this.y);
	}

	magnitude() { // Magnitude of the vector
		return Math.sqrt(this.magnitudeSq());
	}

	magnitudeSq() { // Magnitude squared (more computationally efficient)
		return Math.pow(this.x, 2) + Math.pow(this.y, 2);
	}

	add(vec2, y) { // Add to the vector. Modifies, does NOT return new
		this.x += y ? vec2 : vec2.x;
		this.y += y ? y : vec2.y;

		// vec2 can be a vector, but if a y is passed in it acts as the x value instead. So object.add(3,3) is the same as object.add(new Vector(3,3)).

		return this;
	}

	addNew(vec2, y) { // Add function that returns a new vector, without affecting this one
		let vect = this.clone();

		return vect.add(vec2, y);
	}

	sub(vec2, y) { // Subtract from the vector. Modifies, does NOT return new
		this.x -= y ? vec2 : vec2.x;
		this.y -= y ? y : vec2.y;

		// vec2 can be a vector, but if a y is passed in it acts as the x value instead. So object.sub(3,3) is the same as object.sub(new Vector(3,3)).

		return this;
	}

	subNew(vec2, y) { // Sub function that returns a new vector, without affecting this one
		let vect = this.clone();

		return vect.sub(vec2, y);
	}

	mult(vec2, y) { // Multiply the vector. Modifies, does NOT return new
		this.x -= y ? vec2 : vec2.x;
		this.y -= y ? y : vec2.y;

		// vec2 can be a vector, but if a y is passed in it acts as the x value instead. So object.mult(3,3) is the same as object.mult(new Vector(3,3)).

		return this;
	}

	multNew(vec2, y) { // Mult function that returns a new vector, without affecting this one
		let vect = this.clone();

		return vect.mult(vec2, y);
	}

	div(vec2, y) { // Divide the vector. Modifies, does NOT return new
		this.x /= y ? vec2 : vec2.x;
		this.y /= y ? y : vec2.y;

		// vec2 can be a vector, but if a y is passed in it acts as the x value instead. So object.div(3,3) is the same as object.div(new Vector(3,3)).

		return this;
	}

	divNew(vec2, y) { // Div function that returns a new vector, without affecting this one
		let vect = this.clone();

		return vect.div(vec2, y);
	}
}

class AngularVector extends Vector {
	constructor(theta, r) {
		super(r * Math.cos(theta), r * Math.sin(theta));
	}
}

Vector2D.prototype.scalarMult = function (k) {
  this.x *= k;
  this.y *= k;
  return this;
}

Vector2D.prototype.scalarDiv = function(k) {
  if (k !== 0){
    this.x /= k;
    this.y /= k;
  }
  return this;
}

Vector2D.prototype.normalize = function(){
  var mag = this.magnitude();
  this.scalarDiv(mag);
}

Vector2D.prototype.setMag = function(m){
  this.normalize();
  this.scalarMult(m);
  return this;
}

Vector2D.prototype.setDirection = function(theta){
  var m = this.magnitude();
  this.x = m * Math.cos(theta);
  this.y = m * Math.sin(theta);
}

Vector2D.prototype.limit = function(max){
  if(this.magnitude() > max){
    this.setMag(max);
  }
}


////////////////////////////// CLASS FUNCTIONS ////////////////////////

Vector2D.copy = function(vec1){
  return new Vector2D(vec1.x, vec1.y);
}

Vector2D.prototype.clone = function() {
	return Vector2D.copy(this);
}

Vector2D.distance = function(vec1, vec2) {
  var temp = Vector2D.subtract(vec1, vec2);
  return temp.magnitude();
}

Vector2D.prototype.distance = function(vec) {
	return Vector2D.distance(this, vec);
}

Vector2D.distanceSq = function(vec1, vec2){
  var temp = Vector2D.subtract(vec1, vec2);
  return temp.x * temp.x + temp.y * temp.y;
}

Vector2D.prototype.distanceSq = function(vec) {
	return Vector2D.distanceSq(this, vec);
}

Vector2D.vectorTo = function(vec1, vec2) { // From vec1 to vec2
	return new Vector2D(vec2.x - vec1.x, vec2.y - vec1.y);
}

Vector2D.prototype.vectorTo = function(vec) {
	return Vector2D.vectorTo(this, vec);
}

Vector2D.add = function(vec1, vec2){
  return new Vector2D(vec1.x + vec2.x, vec1.y + vec2.y);
}

//subtract second vector from first
Vector2D.subtract = function(vec1, vec2){
  return new Vector2D(vec1.x - vec2.x, vec1.y - vec2.y);
}

Vector2D.dot = function(vec1, vec2){
  return vec1.x * vec2.x + vec1.y * vec2.y ;
}

Vector2D.angleBetween = function(vec1, vec2) {
  return vec1.theta() - vec2.theta();
}

Vector2D.scalarMult = function (vec1, k) {
  return new Vector2D(vec1.x * k, vec1.y * k);
}

Vector2D.scalarDiv = function(vec1, k) {
  if (k !== 0){
    return new Vector2D(vec1.x / k, vec1.y / k);
  }
}

Vector2D.normalize = function(vec1){
  var mag = vec1.magnitude();
  return Vector2D.scalarDiv(vec1, mag);
}

Vector2D.random = function(xMin, xMax, yMin, yMax){
  var x = Math.random() * (xMax - xMin) + xMin;
  var y = Math.random() * (yMax - yMin) + yMin;
  return new Vector2D(x, y);
}
