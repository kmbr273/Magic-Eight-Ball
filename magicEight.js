let userName = 'Jane';
userName ? console.log('Hello, Jane!') : console.log('Hello!');
const userQuestion = 'What is your favorite candy, Jane?';
console.log(`The user asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;
switch (eightBall) {
 case 0: eightBall = 'You are a millionaire';
  break;
  case 1: eightball = 'It is certain';
  break;
  case 2: eightBall = 'It is decidedly so';
  break;
  case 3: eightBall = 'Reply hazy try again';
  break;
  case 4: eightBall = 'Cannot predict now';
  break;
  case 5: eightBall = 'Do not count on it';
  break;
  case 6: eightBall = 'My sources say no';
  break;
  case 7: eightBall = 'Outlook not so good';
  break;
  case 8: eightBall = 'Signs pount to yes';
  break;
}
console.log(`The eight ball answered: ${eightBall}`);