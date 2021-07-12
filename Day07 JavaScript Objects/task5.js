/* 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased */
function Cylinder(height,diameter) {
    this.height = height;
    this.diameter = diameter;
 this.Volume = function () {
    var radius = diameter / 2;
    return height * Math.PI * radius * radius;
  };
}
  var c = new Cylinder(15, 6);
  console.log('volume =', c.Volume().toFixed(4));