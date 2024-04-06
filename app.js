// functions

function AddTwoNumbers(firstNum, secondNum) {
  return firstNum + secondNum;
}

AddTwoNumbers(3, 6);
console.log(AddTwoNumbers(3, 6));

let a = 7;
let b = 5;

console.log(AddTwoNumbers(a, b));

const AddTwoNumber = (firstNum, secondNum) => {
  return firstNum + secondNum;
};
AddTwoNumbers(9, 7);
console.log(AddTwoNumbers(9, 7));

let arr = [1, 2, 3, 4, 5];
let newNumber = 6;

console.log(arr);

// zastostosowanie spread =...nazwa starej tablicy - rozszerza tablice, obiekty o dodatkowe dane

arrNew = [...arr, newNumber];

console.log(arrNew);

let obj = {
  id: 1,
  name: "anna",
};

let newObj = { ...obj, surname: "Nowak" };
console.log(newObj);

// operacje na tablicy:

let userList = [
  { id: 1, userName: "Adam", userLastName: "Kowalski" },
  { id: 2, userName: "Magda", userLastName: "Kowalska" },
  { id: 3, userName: "Piotr", userLastName: "Kowalski" },
  { id: 4, userName: "Jan", userLastName: "Kowalski" },
  { id: 5, userName: "Łukasz", userLastName: "Kowalski" },
];

// push - dodaje nowy element w tablicy na jej końcu

userList.push(["Kasia", "Asia", "Ola", "Aleksander"]);

console.log(userList);

// pop - usuwa ostatni elemnet tablicy

let lastUser = userList.pop();
console.log(userList);

// shift - usuwa pierwszy elemnet tablicy

let firstUser = userList.shift();
console.log(userList);

// mimo, że poz.1 czy ostatnia zostały usunięte pozostaja w pamięci i można to tak sprawdzić:
console.log(firstUser);
console.log(lastUser);

// concat - dołącza do jednej tablicy inną

let newUserList = [
  { id: 6, userName: "Małgosia", userLastName: "Kowalska" },
  { id: 7, userName: "Kasia", userLastName: "Kowalska" },
];

userList = userList.concat(newUserList);

console.log(newUserList);
console.log(userList);

// połączenie tablic za pomocą spread

userList = [...userList, ...newUserList];
console.log(userList);
// podwójnie dodane id: 6 i 7, bo wcześniej userList została nadpisana 

// reverse - zmienia kolejnosc tablice, pierwy element jest ostatnim

let userListRev = userList.reverse();
console.log(userListRev);

// slice - wyciąga fragment tabeli 

console.log(userList.slice);

let userListPart = userList.slice(1, 5);

console.log(userListPart);

// METODY ITERACYJNE

// forEach - metoda iteracyjna - nie trzeba pisać consol.log
// całość piszemy w () - funcję jak i console.log

userList.forEach(function (name) {
  console.log(name.userName);
});

// inny zapisy funkcji

userList.forEach((name) => {
  console.log(name.userLastName);
});

// metoda map. - tworzy nową tablicę korzystając z danych w starszej tablicy

let userSurNameChange = userList.map((surname) =>
  surname.userLastName === "Chojnacka"
    ? { ...surname, userLastName: "Kowalski" }
    : surname
);
console.log(userSurNameChange);

// powyższy przykład w wersji if:

let ifUserSur = userList.map((surname) => {
  if (surname.userLastName === "Chojnacka") {
    surname.userLastName = "Kowalski";
    return surname;
  } else {
    surname = surname;
    return surname;
  }
});

console.log(ifUserSur);

// metoda filter - wyszukuje elementy - działa tylko w console.log 

let findElement = userList.filter((fName) => {
  fName.userName.length <= 4;
});
console.log(findElement);
+console.log(userList.filter((fName) => fName.userName.length <= 4));

// metoda reduce - możemy sumować wartości z tablicy
// dot. tablicy arr - z poz. 1:  let arr = [1, 2, 3, 4, 5];

console.log(
  arr.reduce((acc, number) => {
    return acc + number;
  }, 0)
);

// zwróciło 15 , bo sumuje wartosci komorek tablicy 0+1=1,1+2=3,3+3=6,6+4=10,10+5=15
// PAMIĘTAĆ warunek początkowy => 0 - wartosc pierwszego elementu
