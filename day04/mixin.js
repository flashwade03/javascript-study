class InsurancePolicy{}

class Car{
  constructor(make, model){
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }

  get userGear() {return this._userGear;}
  set userGear(value) {
    if (this._userGears.indexOf(value) < 0)
      throw new Error(`Invalid gear : ${value}`);
    this._userGear = value;
  }

  shift(gear) {this.userGear = gear;}
}

function makeInsurable(o) {
  o.addInsurancePolicy = function(p) {this.insurenacePolicy = p;}
  o.getInsurancePolicy = function() {return this.InsurancePolicy;}
  o.isInsured = function() {return !!this.InsurancePolicy;}
}

/* 이 방식은 모든 인스턴스에 할당해야한다.
const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());
*/

makeInsurable(Car.prototype); // 이 한번의 호출로 해당하는 모든 기능을 추가(믹스인)할 수 있다.
const car1 = new Car();
car1.addInsurancePolicy(car1);
