import 'package:flutter/material.dart';
import 'package:like_button/like_button.dart';
import 'package:task_1/onboarding/data/onboarding_model.dart';

class OnboardingWidget extends StatelessWidget {
  const OnboardingWidget({
    super.key,
    required this.author,
    required this.content,
  });
  final String content;
  final String author;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          Row(
            children: [
              const Spacer(),
              LikeButton(
                likeBuilder: (bool isLiked) {
                  ///
                  saveThisQuote(content);
                  return Icon(
                    Icons.favorite,
                    color: isLiked ? Colors.pinkAccent : Colors.white,
                  );
                },
              ),
            ],
          ),
          const Expanded(child: SizedBox.shrink()),
          Expanded(
              flex: 5,
              child: Text(
                content,
                style: const TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                    color: Colors.white),
                textAlign: TextAlign.center,
              )),
          Expanded(
            child: Text(author, style: const TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );
  }
}
