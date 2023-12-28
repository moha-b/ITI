import '../../models/account.dart';
import '../repo/transaction.dart';

class Withdraw extends Transaction {
  double amount;

  Withdraw(this.amount);

  @override
  double execute(Account account) {
    if (account.balance >= amount) {
      account.balance -= amount;
    } else {
      print("nice funds dude");
    }
    return account.balance;
  }
}