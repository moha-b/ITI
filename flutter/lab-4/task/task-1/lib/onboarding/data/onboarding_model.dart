import 'package:hive_flutter/hive_flutter.dart';

class Quote {
  String author;
  String content;

  Quote({
    required this.author,
    required this.content,
  });

  factory Quote.fromJson(Map<String, dynamic> json) {
    return Quote(
      author: json['author'],
      content: json['content'],
    );
  }
}

Future<void> saveThisQuote(String quote) async {
  final box = await Hive.openBox('quotes');

  await box.add(quote);
}

Future<List<dynamic>> getListFromHive() async {
  final box = await Hive.openBox('quotes');

  final List list = box.values.toList();

  await box.close();

  return list;
}

List<String> listImage = [
  "images/1.jpeg",
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg",
];
