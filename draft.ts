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
// BankAccount could be an interface, a concrete class,
// or an abstract class. For the sendMoney function, the specific implementation
// does not matter—only that BankAccount includes withdraw and deposit methods.
function sendMoney(
  sender: BankAccount,
  receiver: BankAccount,
  amount: number
) {
  sender.withdraw(amount);
  receiver.deposit(amount);
}

const lucasAccount = new CurrentAccount(500, 200);
const mariaAccount = new SavingsAccount(300);

// transferring $100 from Lucas to Maria
sendMoney(lucasAccount, mariaAccount, 100);

