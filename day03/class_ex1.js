/*
class Car{
  constructor(make, model){
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this.userGears[0];
  }

  get userGear() {return this._userGear;}
  set userGear(value) {
    if (this._userGears.indexOf(value) < 0)
      throw new Error(`Invalid gear : ${value}`);
    this._userGear = value;
  }

  shift(gear) {this.userGear = gear;}
}
*/

const Car = (function(){
  const carProps = new WeakMap();

  class Car{
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ['P', 'N', 'R', 'D'];
      carProps.set(this, {userGear: this._userGears[0]});
    }

    get userGear() {return carProps.get(this).userGear;}
    set userGear(value) {
      if (this._userGears.indexOf(value) < 0)
        throw new Error(`Invalid gear: ${value}`);
      carProps.get(this).userGear = value;
    }

    shift(gear){this.userGear = gear;}
  }
  return Car;
})();

console.log(Car);
console.log(Object.keys(Car));
