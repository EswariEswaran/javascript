const readline = require('readline');
const validUsername = "admin";
const validPassword = "1234";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter username: ", function(username) {
  rl.question("Enter password: ", function(password) {
    
    if (username === validUsername && password === validPassword) {
      console.log("Login Successful!");
    } else if (username === "" || password === "") {
      console.log("Username or password cannot be empty.");
    } else {
      console.log("Invalid Credentials. Try again.");
    }

    rl.close();
  });
});
