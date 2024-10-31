// question 7
// Elyses analytic Enchantments


// const card=2;
// const array=[9,7,3,2];
// const getCardPosition= array.findIndex(a=> a==card);
// console.log(getCardPosition);

// const card=3;
// const array=[2,3,4,5];
// const doesStackIncludeCard=array.some(a=> a==card);
// console.log(doesStackIncludeCard);

// const array=[2,4,6,7];
// const isEachCardEven=array.every(a=> a%2==0);
// console.log(isEachCardEven);

// const array=[3,2,6,4,8];
// const doesStackIncludeOddCard=array.some(a=>a%2==1);
// console.log(doesStackIncludeOddCard);

// const array=[4,2,8,7,9];
// const getFirstOddCard=array.find(a=> a%2==1);
// console.log(getFirstOddCard);

// const array=[5,2,3,1];
// const getFirstCardPosition=array.findIndex(a=> a%2==0);
// console.log(getFirstCardPosition);

// question 8
 // Elyses looping enchantments



//  let count=0;
// function cardTypeCheck(array,cardType){
//     array.forEach(value=>{
//         if(value===cardType){
//             count+=1;
//         }
//     })
//     return count;
// }
//  const cardType=3;
//  const array=[1,2,3,4];
// console.log(cardTypeCheck(array,cardType));
// let count=0;
// function determineOddEvenCards(array, a){
//     for (const numbers of array) {
//         if(a && numbers%2===0){
//             count++;
//         }
//         else if(!a && numbers%2 !==0){
//             count++;
//         }
//     }
//     return count

// }
// const array=[1,2,3,1,5,6];
// const a=true;
// const b=false
// console.log(determineOddEvenCards(array,b));

// FIND THE MAXIMUM
// const numbers=[3,5,7,2,9];
// function findMax(array){
// let max=array[0];
// array.forEach(value=>{
//     if(value>max){
//         max=value;
//     }
// })
// return max;
// }
// const numbers=[3,5,7,2,9];

// console.log(findMax(numbers));


// Count occurences
// let count=0;

// function CountOccurences(array,fruit){

//     array.forEach(value=>{
//         if(value===fruit){
//             count++;
//         }
//     })
//     return count;
// }
// let array=['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// console.log(CountOccurences(array, 'apple'));

// function evenNumbers(array){
//     let even=[];
//     array.forEach(value=>{
//         if(value%2==0){
//             even.push(value)
//         }
//     })
//     return even
// }
// const numbers=[3,4,5,6,7,8,9,];
// console.log(evenNumbers(numbers));
// let count=0;

// function sumArray(array){
// array.forEach(value=>{
//     count+=value;
// })
// return count;

// }
// const numbers=[1,2,3,4,5,6,7,8,9];
// console.log(sumArray(numbers));

// function uniqueNumbers(array){
//     let storage=[array[0], ]
// array.forEach(value=>{
//     if(!storage.includes(value)){
//         storage.push(value)
//     }
// })
// return storage;
// }
// let numbers=[1,2,2,3,4,4,5,5,6,6,6,6,6,6];
// console.log(uniqueNumbers(numbers));


//multiply elements by a factor

// let storage=[]
// function multiplyByFactor(array, number){
//     array.forEach(value=>{
//         value*=number
//         storage.push(value)
//     })
//     return storage;
// }
// const numbers=[1,2,3,4];
// console.log(multiplyByFactor(numbers,3));
// let even=[];
// let odd=[];
// function separateNumbers(array){
// array.foreach(value=>{
//     if(value%2==0){
//         even.push(value)
//     }
//     else if(value%2==1){
//         odd.push(value)
//     }
// })
// return {even,odd}
// }
// const number=[1,2,3,4,5,6,7,8,9];
// console.log(separateNumbers(number));


// question 9
//vehicle purchase;


// function needsLicense(car){
// if(car==='car' || car==='truck'){
//     return true;
// }
// else {
//     return false;
// }
// }
// console.log(needsLicense('bike'));

// function chooseVehicle(car1, car2){
//     if(car1<car2){
// return console.log(car1 + ''+ ' is clearly the better option');

//     }
//     else{
// return console.log(car2 + ''+ ' is clearly the better option');
        
//     }
// }
// chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf');


// function calculateResellPrice(originalPrice, year){
//     if(year<3){
//         return originalPrice*0.8
//     }
//     else if(year>3 && year<10){
//         return originalPrice*0.7
//     }
//     else{
//         return originalPrice*0.5
//     }
// }
// console.log(calculateResellPrice(1000, 15));

// Password strength checker

// function checkPasswordStrength(password){
//    if(password.length<8){
//     return console.log('too short');
//    }
//    const hasLetters=/[a-zA-Z]/.test(password)
//    const hasNumbers=/[0-9]/.test(password)
//    const hasSpecialChars=/[!@$%^&*]/.test(password)
//   if(hasLetters&& hasNumbers&& hasSpecialChars){
//     return console.log('Strong password');
//    }
//  if(hasLetters&& hasNumbers){
//     return console.log('Moderate');
    
//    }
 
//     return console.log('Weak');

// }
// checkPasswordStrength('abs123%$#')








 

 
   


 







