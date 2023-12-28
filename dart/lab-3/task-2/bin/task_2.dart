import 'dart:io';

void main(List<String> arguments) {
  while(true){
    print("Tell me your name !");
    String userName = stdin.readLineSync()!.trim().toLowerCase();

    int distinctCharacterCount = userName.split('').toSet().length;

    if (distinctCharacterCount.isEven) {
      print('CHAT WITH HER!');
    } else {
      print('IGNORE HIM!');
    }
  }
}
