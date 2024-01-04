import 'package:flutter/material.dart';
import 'package:task1/db/constants.dart';

class Note {
  int? id;
  String title = '';
  String text = '';
  String date = '';
  Color? color = Colors.pinkAccent;

  Note({
    this.id,
    required this.title,
    required this.text,
    required this.date,
    required this.color,
  });

  Map<String, dynamic> toMap() => {
        colId: id,
        colTitle: title,
        colText: text,
        colDate: date,
        colColor: color!.value,
      };

  Note.fromMap(Map<String, dynamic> map) {
    id = map[colId];
    title = map[colTitle];
    text = map[colText];
    date = map[colDate];
    color = Color(map[colColor]);
  }
}
