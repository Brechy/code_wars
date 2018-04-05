//All practice 8 kyu Code Wars solutions
function helloWorld() {
  let str = 'Hello World!';
  console.log(str);
}

let gunners = {gunner1:'aye', gunner2:'nay', gunner3:'nay'};
const cannonsReady = (gunners) => {
  for (let key in gunners){
    if (gunners[key] === 'nay'){
    return 'Shiver me timbers!';
    }
  }
     return "Fire!";
}

function abbrevName(name){
  let initials = name.split(' ');

  let firstName = initials[0];
  let lastName = initials[1];
  let fn = firstName.slice(0,1);
  let ln = lastName.slice(0,1);
  let result = fn.toUpperCase() + '.' + ln.toUpperCase();
    return result;
}

function pickIt(arr){
  var odd=[],even=[];

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      even.push(arr[i]);

    } else {
      odd.push(arr[i]);
    }

  }
  return [odd,even];
}

function multiply(a, b){
  return a * b
}

function openOrSenior(data) {
  let memberCategories = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      memberCategories.push('Senior');
    } else {
      memberCategories.push('Open');
    }
  }
  return memberCategories;
}
