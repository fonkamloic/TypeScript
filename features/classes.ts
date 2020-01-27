class Vehicle {

    constructor(public color: string){
    }

  drive(): void {
    console.log('chaugga gagag');
  }

  honk(): void {
    console.log('beep');
  }
}


class Car extends Vehicle {
    drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
      this.drive();
  }
}

const car = new Car("orrange");
console.log(car.color);
car.drive();
car.honk();
