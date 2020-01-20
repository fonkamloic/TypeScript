const carMarkers : string[] = ['esf', 'ford'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carMarkers[0];
const myCar = carMarkers.pop();

carMarkers.map((car: string) :string => {
    return car.toUpperCase();
});

const importantDates: (Date |  string)[] = [new Date()];
importantDates.push('2020-10-10');
importantDates.push(new Date());

