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

    constructor(public wheels: number, color: string){
        super(color);
    }
    drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
      this.drive();
  }
}

const car = new Car(4, "orrange");
console.log(car.color);
car.drive();
car.honk();
