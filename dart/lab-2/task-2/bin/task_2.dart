import 'dart:io';

import 'data/repo/rollback.dart';
import 'data/repo/transaction.dart';
import 'data/repo_impl/repo_impl.dart';
import 'models/account.dart';

void main(List<String> arguments) {
  Account? account;
  Transaction? transactions;
  double amount = 0;
  String warningText = "Account details not entered yet. Please choose option 1 first.";
  while (true) {
    print("\nPress 1 to enter account details");
    print("Press 2 to deposit");
    print("Press 3 to withdraw");
    print("Press 4 to show current balance");
    print("Press 5 to cancel last transaction");
    print("Press 6 to exit");

    String choice = stdin.readLineSync()!;
    switch (choice) {
      case "1":
        print("Enter Your Name :");
        String name = stdin.readLineSync()!;
        print("Enter Your AccountID :");
        int accountId = int.parse(stdin.readLineSync()!);
        print("Enter Your Balance :");
        double balance = double.parse(stdin.readLineSync()!);
        account = Account(ownerName: name, accountNumber: accountId, balance: balance);

      case "2":
        if (account != null) {
          print("Enter deposit amount:");
          amount = double.parse(stdin.readLineSync()!);
          transactions = Deposit(amount);
          print(transactions.execute(account));

        } else {
          print(warningText);
        }

      case "3":
        if (account != null) {
          print("Enter withdrawal amount:");
          amount = double.parse(stdin.readLineSync()!);
          transactions = Withdraw(amount);
          print(transactions.execute(account));
        } else {
          print(warningText);
        }

      case "4":
        if (account != null) {
          transactions = BalanceInquiry();
          double currentBalance = transactions.execute(account);
          print("Current Balance: $currentBalance");
        } else {
          print(warningText);
        }

      case "5":
        if(account != null){
          Rollback rollback = Rollback(amount: amount,transactionId: account.accountNumber);
          print("last transaction canseld ${rollback.execute(account)}");
        }else{
          print("ooooo");
        }

      case "6":
        print("Exiting...");
        exit(0);

      default:
        print("Invalid choice. Please enter a valid option.");
    }
  }
}

