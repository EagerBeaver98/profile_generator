const user = {};
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  
  user.name = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    user.activity = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      user.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        user.meal = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          user.food = answer;
          rl.question("Which sport is your absolute favourite?", (answer) => {
            user.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              user.super = answer;
              console.log(`Hello ${user.name}. You like to ${user.activity}, and listen to ${user.music} while you do. Your favorite meal time is ${user.meal} and your favorite food is ${user.food}. Your favorite sport is ${user.sport}. You are amazing at ${user.super}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
 
  
});
