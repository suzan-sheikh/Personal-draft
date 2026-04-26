// Contract defining the attributes and methods of a bank account
interface BankAccount {
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}
