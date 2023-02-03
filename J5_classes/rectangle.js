class Rectangle {
  constructor(x,y) {
    this._x = x;
    this._y = y
  }
}

class Square extends Rectangle {
  constructor (x) {
    super(x,x)
  }
}
