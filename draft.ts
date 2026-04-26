// Contract defining the attributes and methods of a bank account
interface BankAccount {
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}
class CurrentAccount implements BankAccount {
  balance: number;
  // The class can have other attributes and methods
  // beyond those specified in the interface
  overdraftLimit: number;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

// Abstract class that serves as the base for any type of bank account
abstract class BankAccount {
  balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Concrete method (with implementation)
  deposit(amount: number): void {
    this.balance += amount;
  }

  // Abstract method (must be implemented by subclasses)
  abstract withdraw(amount: number): void;
}

class CurrentAccount extends BankAccount {
  withdraw(amount: number): void {
    const fee = 2; // Current accounts have a fixed withdrawal fee
    const totalAmount = amount + fee;

    if (this.balance >= totalAmount) {
      this.balance -= totalAmount;
    } else {
      console.log("Insufficient balance.");
    }
  }
}

class SavingsAccount extends BankAccount {
  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance.");
    }
  }
}

// ❌ Error! Cannot instantiate an abstract class
const genericAccount = new BankAccount(1000); // Error

// ✅ Creating a current account
const currentAccount = new CurrentAccount(2000); // uses the BankAccount constructor
currentAccount.deposit(500); // uses the deposit method from BankAccount
currentAccount.withdraw(300); // uses the withdraw method from CurrentAccount

// ✅ Creating a savings account
const savingsAccount = new SavingsAccount(1500); // uses the BankAccount constructor
savingsAccount.deposit(1100); // uses the deposit method from BankAccount
savingsAccount.withdraw(500); // uses the withdraw method from SavingsAccount