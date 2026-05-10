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


function sendMoney(
  sender: BankAccount,
  receiver: BankAccount,
  amount: number
) {
  sender.withdraw(amount);
  receiver.deposit(amount);
}


// person object
class Person {
   name: string = ''
   age: number = 0
}

// motor vehicle object
class Motor {
  make: string = ''
  model: string = ''
  color: string = ''
}

// create a new instance of each
const person1 = new Person()
const motor1 = new Motor()

// warning Property 'age' does not exist on type 'Motor'
// motor1.age() 