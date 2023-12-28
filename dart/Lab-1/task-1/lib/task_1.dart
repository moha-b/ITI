// task
calculate(String text) {
  var stars = "";
  for(int i = 0; i < text.length; i++){
    stars += "*";
    print(stars);
  }
  print("------------------------");
  for(int i = stars.length; i > 0; i--){
    print(stars.substring(0,i));
  }
}

// lab 1
reverseInt(int number){
  if(number.isNegative){
    var num = number.toString().substring(1,number.toString().length);
    print("-${num.split('').reversed.join('')}");
  }else{
    print(number.toString().split('').reversed.join(''));
  }
}

// lab 2
int flagstonesNeeded(int n, int m, int a) {
  return ( (n + a  -1) ~/ a ) * ( (m + a -1) ~/ a );
}

// lab 3
String longestWord(String input) {
  var words = input.replaceAll('-', '').replaceAll(',', '').replaceAll('.', '').split(' ');

  String longest = '';
  int maxLength = 0;

  for (String word in words) {
    if (word.length > maxLength) {
      longest = word;
      maxLength = word.length;
    }
  }

  return longest;
}

