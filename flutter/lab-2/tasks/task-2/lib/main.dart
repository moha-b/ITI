import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            showModalBottomSheet(
              context: context,
              builder: (BuildContext context) {
                return const CourseSelectionBottomSheet();
              },
            );
          },
          child: const Text('Select Courses'),
        ),
      ),
    );
  }
}

class CourseSelectionBottomSheet extends StatefulWidget {
  const CourseSelectionBottomSheet({super.key});

  @override
  _CourseSelectionBottomSheetState createState() =>
      _CourseSelectionBottomSheetState();
}

class _CourseSelectionBottomSheetState
    extends State<CourseSelectionBottomSheet> {
  List<String> courses = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'History',
    'Geography',
  ];

  Map<String, bool> selectedCourses = {};

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          const Text(
            'Select Courses',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 16.0),
          Expanded(
            child: ListView.builder(
              itemCount: courses.length,
              itemBuilder: (context, index) {
                final course = courses[index];
                return CheckboxListTile(
                  title: Text(course),
                  value: selectedCourses.containsKey(course)
                      ? selectedCourses[course]
                      : false,
                  onChanged: (value) {
                    setState(() {
                      selectedCourses[course] = value!;
                    });
                  },
                );
              },
            ),
          ),
          const SizedBox(height: 16.0),
          ElevatedButton(
            onPressed: () {
              print('Selected Courses: ${selectedCourses.keys}');
              Navigator.pop(context);
            },
            child: const Text('Done'),
          ),
        ],
      ),
    );
  }
}
