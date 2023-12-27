import '../../models/account.dart';

abstract class Transaction{
  late int transactionId;

  double execute(Account account);
}