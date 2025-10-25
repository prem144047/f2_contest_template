/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   const developers = arr
    .map((employee) => (employee.profession === "developer" ? employee : null))
    .filter((employee) => employee !== null);

  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   const developers = [];
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  console.log(developers);
}

function addData() {
  //Write your code here, just console.log
   const newEmployee = {
    id: 4,
    name: "susan",
    age: "22",
    profession: "intern",
  };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
   const filteredArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 4, name: "steve", age: "25", profession: "developer" },
    { id: 5, name: "martha", age: "23", profession: "designer" },
  ];

  const combinedArr = arr.concat(newArr);
  console.log(combinedArr);
}
