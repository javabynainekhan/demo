// console.log('Hello World!');
// console.log('Kick Nain');
// //variables
// name='Kick Nain';
// console.log(name);
// sentence = 'how are you doing today, nice to see you, hope you have a great day!';
// //console.log(sentence);
// //operators
// //hard coded
// food=20;
// //console.log(food);
// tipPercentage=0.2;/*20/100=0.2*/
// tipAmount=food*tipPercentage;
// console.log(tipAmount);

// //first Project
// //user input
// fruit=prompt('What is your Favorite fruit ?');
// console.log(fruit);
// // ans=prompt('Enter the price of the food..');
// // food1=ans;
// // // tip=prompt('Enter your tip percentage..');
// // // tipPercentage1=tip;
// // tipPercentage1=prompt('tip % ?')/100;
// // tipAmount1=food1*tipPercentage1;
// // console.log(tipAmount1," ",typeof tipAmount1);
// // alert(tipAmount1);
// // total=food1+tipAmount1;
// // console.log(total," ",typeof total);
// //data types(string,number);
// Number('100');//it convert String to number
// String(100);//it is used to convert number to string
// Boolean(100);
// console.log(Boolean(100));
// ans=Number(prompt('Enter the price of the food..'));
// food1=ans;
// // tip=prompt('Enter your tip percentage..');
// // tipPercentage1=tip;
// tipPercentage1=Number(prompt('tip % ?'))/100;
// tipAmount1=food1*tipPercentage1;
// console.log('Tip Amount :: ',tipAmount1," ",typeof tipAmount1);
// alert(tipAmount1);
// total=food1+tipAmount1;
// console.log('Total Amount ::',total," ",typeof total);
// */
// //Functions

// //Type Casting
//Baby weather app(Conditional statements)
// let weather=prompt('Enter your weather its raine or sun like rainy or sun (How is the Weather)');
// if(weather === 'Rain'|| weather === 'rainy'){
//     console.log('Grab your Umbrell');
// }else{
//     console.log('Wear your sunglasses');
// }
function sum(a,b){
    return a+b;
}
function calculateFoodTotal(food,tip){
    tipPercentage=tip/100;
    tipAmount=food * tipPercentage;
    // totalAmount= food + tipAmount;
    // totalAmount=function(food,tipAmount){
    //     return food + tipAmount;
    // }
    totalAmount=sum(food,tipAmount);
    console.log(`Tip Amount :: ${tipAmount}.`);
    console.log(`Total Amount :: ${totalAmount}.`);
    return totalAmount;
}
calculateFoodTotal(100,20);