import 'package:flutter/material.dart';
import 'package:task1/db/CURD.dart';
import 'package:task1/model/Note.dart';
import 'package:task1/utils/date_time_manager.dart';
import 'package:task1/utils/extensions/WidgetEx.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final GlobalKey<FormState> _formKey = GlobalKey();
  final GlobalKey<FormState> _editFormKey = GlobalKey();
  late TextEditingController _noteTitleController;
  late TextEditingController _noteTextController;

  late TextEditingController _editNoteTitleController;
  late TextEditingController _editNoteTextController;
  Color noteColor = Colors.white30;
  final List<Color> colorList = [
    Colors.red,
    Colors.blue,
    Colors.green,
    Colors.yellow,
    Colors.purple,
    Colors.greenAccent,
    Colors.pinkAccent,
    Colors.blueGrey
  ];
  @override
  void initState() {
    super.initState();
    _noteTitleController = TextEditingController();
    _noteTextController = TextEditingController();
    _viewData();
  }

  @override
  void dispose() {
    super.dispose();
    _noteTextController.dispose();
    _noteTitleController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
            child: Column(
          children: [
            Form(
                key: _formKey,
                child: Column(
                  children: [
                    TextFormField(
                      controller: _noteTitleController,
                      validator: (value) =>
                          value!.isEmpty ? 'This Field is required' : null,
                      keyboardType: TextInputType.text,
                      decoration: const InputDecoration(
                          labelText: 'Note Title', icon: Icon(Icons.notes)),
                    ),
                    TextFormField(
                      controller: _noteTextController,
                      validator: (value) =>
                          value!.isEmpty ? 'This Field is required' : null,
                      keyboardType: TextInputType.text,
                      decoration: (const InputDecoration(
                          labelText: 'Note Text', icon: Icon(Icons.notes))),
                    ),
                    Container(
                      height: 80,
                      margin: const EdgeInsets.symmetric(vertical: 16),
                      width: double.infinity,
                      child: ListView.separated(
                        itemCount: colorList.length,
                        scrollDirection: Axis.horizontal,
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        itemBuilder: (context, index) => GestureDetector(
                          onTap: () {
                            setState(() {
                              noteColor = colorList[index];
                            });
                          },
                          child: Container(
                            decoration: BoxDecoration(
                                color: colorList[index],
                                borderRadius: BorderRadius.circular(10)),
                            width: 80,
                          ),
                        ),
                        separatorBuilder: (BuildContext context, int index) =>
                            SizedBox(width: 5),
                      ),
                    ),
                    ElevatedButton(
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            Note n = Note(
                                title: _noteTitleController.value.text,
                                text: _noteTextController.value.text,
                                date: DateTimeManager.currentDateTime(),
                                color: noteColor);
                            _saveNote(n);
                          }
                        },
                        child: const Text('Add Note'))
                  ],
                )),
            FutureBuilder(
                future: _viewData(),
                builder: (context, AsyncSnapshot<List<Note>> snapshot) {
                  if (snapshot.hasData) {
                    List<Note> myNotes = snapshot.data!;
                    return ListView.separated(
                      shrinkWrap: true,
                      padding: EdgeInsets.all(10),
                      physics: const NeverScrollableScrollPhysics(),
                      itemBuilder: (context, index) => Tooltip(
                        message: myNotes[index].date,
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(8),
                            color: myNotes[index].color,
                          ),
                          child: ListTile(
                            leading: const Icon(Icons.note_alt),
                            title: Text(myNotes[index].title),
                            subtitle: Text(myNotes[index].text),
                            trailing: SizedBox(
                              width: 100,
                              child: Row(
                                children: [
                                  IconButton(
                                    onPressed: () {
                                      _deleteNote(myNotes[index].id);
                                    },
                                    icon: const Icon(
                                      Icons.delete,
                                      color: Colors.red,
                                    ),
                                  ),
                                  IconButton(
                                    onPressed: () {
                                      showEditDialog(myNotes[index]);
                                    },
                                    icon: const Icon(
                                      Icons.edit,
                                      color: Colors.white,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                      separatorBuilder: (context, index) =>
                          SizedBox(height: 10),
                      itemCount: myNotes.length,
                    );
                  } else if (snapshot.hasError) {
                    return Center(
                      child: Text(
                        snapshot.error!.toString(),
                        style: TextStyle(color: Colors.red),
                      ),
                    );
                  } else {
                    return Center(child: CircularProgressIndicator());
                  }
                })
          ],
        )),
      ),
    );
  }

  void _saveNote(Note n) {
    CURD.curd.save(n).then((value) {
      //1-message
      widget.showMessage(context, 'Note inserted successfully');
      //2-clear
      clearText();
      //3-view data
      _viewData();
      setState(() {});
    });
  }

  void clearText() {
    _noteTitleController.text = '';
    _noteTextController.text = '';
  }

  // void _viewData() {
  //   CURD.curd.view().then((value) {
  //     setState(() {
  //       notes = value;
  //     });
  //   });
  // }
  Future<List<Note>> _viewData() {
    return CURD.curd.view();
  }

  void _deleteNote(int? id) {
    CURD.curd.delete(id!).then((value) {
      widget.showMessage(context, 'Note deleted successfully');
      _viewData();
      setState(() {});
    });
  }

  void showEditDialog(Note note) {
    _editNoteTitleController = TextEditingController(text: note.title);
    _editNoteTextController = TextEditingController(text: note.text);
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
          title: Text('Update Note'),
          content: Wrap(
            children: [
              Form(
                key: _editFormKey,
                child: Column(
                  children: [
                    TextFormField(
                      controller: _editNoteTitleController,
                      validator: (value) =>
                          value!.isEmpty ? 'This Field is required' : null,
                      keyboardType: TextInputType.text,
                      decoration: const InputDecoration(
                          labelText: 'Note Title', icon: Icon(Icons.notes)),
                    ),
                    TextFormField(
                      controller: _editNoteTextController,
                      validator: (value) =>
                          value!.isEmpty ? 'This Field is required' : null,
                      keyboardType: TextInputType.text,
                      decoration: (const InputDecoration(
                          labelText: 'Note Text', icon: Icon(Icons.notes))),
                    ),
                  ],
                ),
              )
            ],
          ),
          actions: [
            TextButton(
                onPressed: () => Navigator.pop(context), child: Text('Cancel')),
            TextButton(
                onPressed: () {
                  if (_editFormKey.currentState!.validate()) {
                    note.title = _editNoteTitleController.value.text;
                    note.text = _editNoteTextController.value.text;
                    _updateNote(note);
                    Navigator.pop(context);
                  }
                },
                child: Text('Update')),
          ]),
    );
  }

  void _updateNote(Note note) {
    CURD.curd.update(note).then((value) {
      widget.showMessage(context, 'Note updated successfully');
      _viewData();
      setState(() {});
    });
  }
}
