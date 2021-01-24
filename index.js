const chalk = require('chalk');
const readLineSync= require('readline-sync');

function menu()
{

  console.clear();
console.log('************ This is all we offer ************\n ')

//d29ya2F0LnRlY2g=

console.log('1. Base64 Encoding\n2. Base64 Decoding\n')

const choice=readLineSync.question(chalk.green.bold('Which app you want to use?\n'));
return choice;
}

const choice = menu();
proceedChoice(choice);

function proceedChoice(choice)
{
  //console.log(typeof(choice));
  //https://workat.tech/ide
  console.clear();
switch (choice) {
  case "1":
  const b_64=readLineSync.question(chalk.green.bold('Enter the base_64 string to encode\n'));
     const encodedString=base64Encoding(b_64);
     console.log(encodedString);
    break;
  case "2":
  const b_64_e=readLineSync.question(chalk.green.bold('Enter encoded base 64 to decode\n'));
    decodedString=base64Decoding(b_64_e);
    console.log(decodedString);
    break;
    default:
  console.log("You have entered the wrong choice!Try Again\n");
  const choice=menu();
  proceedChoice(choice);
  break;
}

const useAgain=readLineSync.question(chalk.green.bold('Enter 1 to  go back to main menu\nEnter any other key exit\n'));

if(useAgain==="1")
{
  const choice=menu();
  proceedChoice(choice);
}


}


function base64Encoding(stringToEncode)
{
 // console.clear();
  

  return Buffer.from(stringToEncode).toString('base64');

///console.log(base64); //d29ya2F0LnRlY2g=


}


function base64Decoding(stringToDecode)
{
  //console.clear();
  
return Buffer.from(stringToDecode, 'base64').toString('ascii');

//console.log(original);
}
