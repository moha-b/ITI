import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  List<String> list = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
  ];

  String image1 = "images/1.png";
  String image2 = "images/1.png";
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text("The Dice App",
              style:
                  TextStyle(fontWeight: FontWeight.bold, color: Colors.white)),
          backgroundColor: Colors.lightGreen,
          actions: [
            GestureDetector(
              onTap: () {
                setState(() {});
              },
              child: Text(
                "fdjkalfjkldjfkl;das",
                style: TextStyle(color: Colors.white),
              ),
            ),
            SizedBox(width: 16),
          ],
        ),
        body: Padding(
          padding: const EdgeInsets.symmetric(vertical: 16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                "Shake to throw",
                style: TextStyle(color: Colors.grey, fontSize: 20),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Image.asset(image1, color: Colors.red),
                  Image.asset(
                    image2,
                    color: Colors.red,
                  ),
                ],
              ),
              ElevatedButton(
                  onPressed: () {
                    setState(() {
                      image1 = list[3];
                      image2 = list[2];
                    });
                  },
                  child: const Text("Roll Dice"))
            ],
          ),
        ),
      ),
    );
  }
}
