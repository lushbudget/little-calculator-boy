//write a function called getSum that takes two numbers
const getSum = (num1, num2) => {
//returns the sum of the two arguments
  return num1 + num2;
}
//invoke the addition function with two arguments passed
getSum();

//Write function getDividend that takes two numbers as args
const getDividend = (num1, num2) => {
  //returns first num divided by the second num
  return num1 / num2;
}
// invoke the dividend with two args passed in
getDividend();

//for multiplication
const getProduct = (num1, num2) => {
  return num1 * num2;
}
getProduct();

//for division
const getDifference = (num1, num2) => {
  return num1 - num2;
}
getDifference();

//to invert a number
const inverseNumber = (aNum) => {
//find if the number is negative 
  if (aNum < 0) {
//return it as a positive number
    return Math.abs(aNum);
  }
//find if the number is positive
  if (aNum > 0) {
//return it as a negative number
    return -Math.abs(aNum);
  }
}
inverseNumber();

//write a function convertPercentageToDecimal that takes a percentage as an arg
const convertPercentageToDecimal = (percentage) => {
//turns the percentage into a floating number  
//returns that decimal number
  return percentage / 100;
}
convertPercentageToDecimal();

//write a function called getRandomInteger 
const getRandomInteger = (max) => {
//if the maximum is undefined, assign max to 300
  if (max === undefined) {
    max = 300;
  }
  //return a random integer
  return Math.floor(Math.random() * max);
}
getRandomInteger();

const getPi = () => {
  return 3.14;
}
getPi();

const getRemainder = (num1, num2) => {
  return num1 % num2;
}
getRemainder();

const getSquareRoot = (aNum) => {
  return Math.sqrt(aNum);
}
getSquareRoot();


console.log(getSum(getRemainder(10, 3), convertPercentageToDecimal(80)));













