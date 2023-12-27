
import '../../models/account.dart';
import '../repo/transaction.dart';

class BalanceInquiry extends Transaction{

  String currencyType({String currencyType = "U"}){
    return currencyType;
  }

  @override
  double execute(Account account) {
    if (currencyType().toUpperCase() == "U") {
      return account.balance;
    } else if (currencyType().toUpperCase() == "E") {
      return account.balance * 0.85;
    } else {
      throw ArgumentError("Invalid currencyType.");
    }
  }

}