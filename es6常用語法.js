//解構========================
const person = {
  name: "小名",
  age: 19,
  sex: "boy",
  food: "炒飯",
  call() {
    console.log(this.name);
  },
  //此為簡寫形式，原本寫法如下:
  //   call:function(){
  // console.log(this.name)
  //   }
};
const people = ["小名", "曉華", "小美"];
//取出特定值
/*物件*/
const { name, age, sex } = person;
console.log(name, age, sex);
/*陣列*/
const [a, b, c, d] = people;
console.log(a, b, c, d);

//重新命名
const { name: myName, age: myAge, sex: mySex } = person;
console.log(myName, myAge, mySex);
//預設值
const { food = "拉麵" } = person;
console.log(food);
//函式
function callName({ name, sex, foo }) {
  console.log(name, sex, foo);
}
callName(person);

//屬性縮寫
const Text = "AAA";
const Num = 123;
//原本
const obj = {
  Text: Text,
  Num: Num,
};
console.log(obj);
//縮寫
const newObj = {
  Text,
  Num,
};
console.log(newObj);

//展開運算子===========
const A = [1, 2, 3];
const B = [4, 5];
const C = [...A, ...B];
console.log(C);
//其餘運算子
function callNum(n, ...arg) {
  console.log(n, arg);
}
callNum(1, 2, 3, 4, 5);

//可選串聯
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
