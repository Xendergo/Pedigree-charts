function Person(gender, color, x, y) {
  this.size = 20;
  this.gender = gender;
  this.color = color;
  this.x = x;
  this.y = y;
  this.textBox = createInput();
  this.show = () => {
    if (gender === "male") {
      stroke(51);
      fill(color);
      rect(this.x, this.y, this.size, this.size);
    } else {
      ellipseMode(CORNER);
      stroke(51);
      fill(color);
      ellipse(this.x, this.y, this.size, this.size);
    }
    this.textBox.position(this.x, this.y+30).elt.maxLength = 2;
  }
}
