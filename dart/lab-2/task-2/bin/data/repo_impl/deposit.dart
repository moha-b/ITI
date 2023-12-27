import '../../models/account.dart';
import '../repo/transaction.dart';

class Deposit extends Transaction {
  double amount;

  Deposit(this.amount);

  @override
  double execute(Account account) {
    account.balance += amount;
    return account.balance;
  }
}