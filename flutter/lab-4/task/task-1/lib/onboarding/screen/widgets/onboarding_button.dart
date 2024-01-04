import 'package:flutter/material.dart';

class OnboardingButton extends StatelessWidget {
  final VoidCallback? function;
  final String text;
  const OnboardingButton({
    Key? key,
    required this.function,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: function,
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.orangeAccent,
        foregroundColor: Colors.white,
      ),
      child: Text(text),
    );
  }
}
