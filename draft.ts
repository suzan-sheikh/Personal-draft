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

// person class object
class NextPerson {
   public name: string = ''
   public age: string = ''

   public greetings(){
     return name + ' ' + age
   } 
}

// class person

class Person {
   private readonly credentials: string = ''
   private name: string = ''
   private department: string = ''

   constructor(value: string){
      this.credentials = value
   }

   public setName(name: string): void {
      if(!this.credentials) return
      this.name = name
      // logic get department
      const userDepartment = axios.get(.....)
      if(userDepartment) this.department = userDepartment
   }

   public getName(){
     return `Employee name: ${this.name}, Department: ${this.department}`
   }
}