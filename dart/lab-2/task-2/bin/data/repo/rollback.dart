import '../../models/account.dart';
import '../repo_impl/deposit.dart';
import '../repo_impl/withdraw.dart';

class Rollback implements Withdraw, Deposit {
  @override
  double amount;

  @override
  int transactionId;

  Rollback({required this.amount, required this.transactionId});

  @override
  double execute(Account account) {
    if (this is Withdraw) {
      if (account.balance + amount >= 0) {
        account.balance += amount;
      } else {
        print("Error: Cannot rollback withdrawal, no funds.");
      }
    } else if (this is Deposit) {
      account.balance -= amount;
    }

    return account.balance;
  }

  canselTransaction(Account account){}


}