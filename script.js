/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   arr.forEach((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "Prem Kumar", age: "25", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredArr = arr.filter((person) => person.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 5, name: "mark", age: "25", profession: "developer" },
    { id: 6, name: "emma", age: "23", profession: "admin" },
  ];

  const combined = arr.concat(newArr);
  console.log(combined);
}
