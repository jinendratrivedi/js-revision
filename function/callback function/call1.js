// make atm machine 

// ATM Machine
const password = "1234";
let availableBalance = 65479;

function atmMachine() {
  const enteredPassword = prompt("Enter password:");

  if (enteredPassword === password) {
    const choice = parseInt(prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance"));

    switch (choice) {
      case 1: // Withdraw
        const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
        if (withdrawAmount <= availableBalance) {
          availableBalance -= withdrawAmount;
          alert(
            `Withdrawal successful! New balance: ${availableBalance}`
          );
        } else {
          alert("Insufficient balance!");
        }
        break;

      case 2: // Deposit
        const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
        availableBalance += depositAmount;
        alert(
          `Deposit successful! New balance: ${availableBalance}`
        );
        break;

      case 3: // Check Balance
        alert(`Your current balance is: ${availableBalance}`);
        break;

      default:
        alert("Invalid option! Please try again.");
    }
  } else {
    alert("Incorrect password! Access denied.");
  }

  alert("Thank you for visiting the ATM!");
}

// Start the ATM process
atmMachine();


