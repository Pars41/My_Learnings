// //* EXAMPLE: NESTED

// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
// };

// const { car1, car2 } = cars;

// // console.log(car1,car2);

// const { name: nameCar1, engine: engineCar1 } = car1;
// const { name: nameCar2, engine: engineCar2 } = car2;
// console.log(nameCar1, engineCar2);

// const {
//   car1: { name },
//   car2: { model },
// } = cars;

// console.log(name, model);

// const model2 = cars.car1.model;
// console.log(model2);

//Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//classical

team.forEach((t,i)=>{
    console.log(i+1+"."+"NAME:",t.name);
    console.log("SURNAME:",t.surname);
    console.log("JOB:",t.job);
    console.log("AGE:",t.age);
    console.log("***********");
})

//destructure

team.forEach((person,i)=>{
    const {name,surname,job,age } = person
    console.log(i+1+"."+"NAME:",name);
    console.log("SURNAME:",surname);
    console.log("JOB:",job);
    console.log("AGE:",age);
    console.log("***********");
})

//functionun döndürdüğü obje doğrudan destr edilebilir

const getInfo = () => {
    return {
        ids: new Date().getTime(),
        productname: "mac"
    }
}
const {productname,ids} = getInfo()
console.log(ids);

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"]

//*Classical
const mehmet = names[1] //* indexing

const [p1, p2, , p4] = names
console.log(p1, p2, p4)



//rest(.....)

const auto = ["anadol","reno","bmw","mercedes","ferrari"]
const [x,y, ...z] =auto;
console.log(z)