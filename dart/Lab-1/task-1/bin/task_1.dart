import 'package:task_1/task_1.dart' as task;
import 'dart:io';
void main(List<String> arguments) {

  task.calculate("Mohab");

  task.reverseInt(-51);

  // print("Enter the width of the Theatre : ");
  // int n = int.parse(stdin.readLineSync()!);
  // print("Enter the height of the Theatre : ");
  // int m = int.parse(stdin.readLineSync()!);
  // print("Enter the size of the flagstone : ");
  // int a = int.parse(stdin.readLineSync()!);

  print(task.flagstonesNeeded(6,6,4));

  print(task.longestWord("Hi M.oh,ab--"));

  for(int i = 0 ; i< 6; i++)
  {
    for(int j=(6-i);j>1;j--){
      stdout.write(" ");
    }
    for(int j = 0;j<=i;j++)
    {
      stdout.write("* ");
    }
    stdout.writeln();
  }

  print('--------------------------------');
  for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= i; j++) {
      stdout.write("* ");
    }
    stdout.writeln();
  }
  for (int i = 6 - 1; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
      stdout.write("* ");
    }
    stdout.writeln();
  }
}
