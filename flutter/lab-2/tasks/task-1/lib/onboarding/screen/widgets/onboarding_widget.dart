import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OnboardingWidget extends StatelessWidget {
  const OnboardingWidget({
    super.key,
    required this.image,
    required this.text,
  });
  final String text;
  final String image;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          Expanded(child: SizedBox.shrink()),
          Expanded(
              child: Text(
            text,
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          )),
          Expanded(
              flex: 7,
              child: SvgPicture.asset(
                image,
                fit: BoxFit.contain,
              )),
        ],
      ),
    );
  }
}
