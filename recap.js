// var let const 
const tax = 5000;
let eta = 5;
eta =2
// console.log(eta)



const student = { name: 'nayeem', marks: 50 }
const friends = ['abul', 'babul', 'cabuk']
// default parameter 
function add(num1, num2 = 0) {

}

// template string 
const dynamicText = `My tax: ${tax} and marks ${student.marks * 1.2 } has friend: ${friends[1]}`;
// console.log(dynamicText)

const innerHTML = `
<div>
<h1> Hello: ${friends.length}</h1>
<p>I am learning es6</p>
</div>
`
// console.log(innerHTML)


// Arrow function 
const add2 = (num1, num2 = 0) => num1 + num2;
const tenTimes = x => x * 10;


// spread 
const newFriends = [...friends, 'dabul', 'ebul'];


// destructuring
const { marks: totalMarks, age = 0} = student;
// console.log(totalMarks, age);
const [firstFriend] = friends;
// console.log(firstFriend)