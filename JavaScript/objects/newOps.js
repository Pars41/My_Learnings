//* EXAMPLE: NESTED

const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;

// console.log(car1,car2);

 const { name: nameCar1, engine: engineCar1}= car1 ;
 const { name: nameCar2, engine: engineCar2}= car2 ;
 console.log(nameCar1,engineCar2);


const { car1:{name}, car2:{model} } = cars;

console.log(name,model);
