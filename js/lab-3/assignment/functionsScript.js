// Q1
const capitalizeFirstLetter = (sentence) => sentence.toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

let text = "the quick brown fox";
//console.log(text.split(' '))
console.log(capitalizeFirstLetter(text));

// Q2
const longestWord_1 = (sentence) => sentence.split(' ').reduce(
    (previousValue, currentValue) => previousValue.length > currentValue.length ? previousValue : currentValue);
function longestWord_2(sentence){
   let longWord = "";
   sentence.split(' ').map((word) =>
       (word.length > longWord.length) ? longWord = word : longWord);
   return longWord;
}
text =  'Web Development Tutorial';
console.log(longestWord_1(text));

// Q3
const sortInAlphabeticalOrder = (sentence) => sentence.split('')
    .sort()
    .join('');
text = "javascript";
console.log(sortInAlphabeticalOrder(text));

// Q4
// const getMonthName = (date) => new Date(date.toString()).getMonth();

function getMonthName(date){
   let monthNames = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ];
   return monthNames[new Date(date).getMonth().toLocaleString()];
}
const getMonthName_2 = (date) => new Date(date).toLocaleString('default',  { month: 'long' });
console.log(getMonthName_2("2023-4-1"));

// Q5
function randomNumbers(maxRandomNumber = 10,
                       minRandomNumber = 1,
                       arrayLength= 5){
   const getRandomNumbers = () =>
       Math.round(Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber);

   let numbersList=[];
   while(numbersList.length < arrayLength){
      let number = getRandomNumbers();
      if(!numbersList.includes(number)){
         numbersList.push(number);
      }
   }
   return numbersList;
}

console.log(randomNumbers());
let s = "ss".match("ss");
let ss = new RegExp("ss").test("sss");
console.log(ss);