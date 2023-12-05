const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10, // Specify the length of the password
    numbers: true, // Include numbers in the password
    symbols: true, // Include symbols in the password
    uppercase: true, // Include uppercase letters in the password
    excludeSimilarCharacters: true // Exclude similar characters like 'l' and '1'
  });

  return password;
}

// Generate and log a random password
const password = generateRandomPassword();
console.log('Generated Password:', password);