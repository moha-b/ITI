import 'package:flutter/material.dart';

extension WidgetEx on Widget {
  void showMessage(BuildContext context, String message) {
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text(message)));
  }
}
