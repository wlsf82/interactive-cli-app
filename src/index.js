import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chat = () => {
  rl.question('Enter a command (type "exit" to quit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Goodbye!");
      rl.close();
    } else {
      console.log(`You entered: ${input}`);
      chat();
    }
  });
};

console.log("Welcome to the CLI App!");

chat();
