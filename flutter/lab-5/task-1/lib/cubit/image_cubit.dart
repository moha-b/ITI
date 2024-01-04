import 'dart:math';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:meta/meta.dart';

part 'image_state.dart';

class ImageCubit extends Cubit<ImageState> {
  final List<String> imageUrls = [
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
  ];
  final Random _random = Random();
  int currentIndex = 0;

  ImageCubit() : super(const ImageState("images/1.jpeg"));

  void changeImage() {
    final randomIndex = _random.nextInt(imageUrls.length);
    emit(ImageState(imageUrls[randomIndex]));
  }
}
