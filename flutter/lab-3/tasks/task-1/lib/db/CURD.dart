import 'package:sqflite/sqflite.dart';
import 'package:task1/db/constants.dart';
import 'package:task1/db/helper.dart';
import 'package:task1/model/Note.dart';

class CURD {
  CURD._();

  static final CURD curd = CURD._();

  Future<int> save(Note n) async {
    Database db = await Helper.helper.createOrOpen();
    return await db.insert(TABLE_NAME, n.toMap());
  }

  Future<List<Note>> view() async {
    Database db = await Helper.helper.createOrOpen();
    List<Map<String, dynamic>> result =
        await db.query(TABLE_NAME, orderBy: '$colDate desc');
    return result.map((e) => Note.fromMap(e)).toList();
  }

  Future<int> delete(int noteId) async {
    Database db = await Helper.helper.createOrOpen();
    return await db.delete(TABLE_NAME, where: '$colId=?', whereArgs: [noteId]);
  }

  Future<int> update(Note note) async {
    Database db = await Helper.helper.createOrOpen();
    return await db.update(TABLE_NAME, note.toMap(),
        where: '$colId=${note.id}');
  }
}
/*
await db.update(TABLE_NAME, note.toMap(),
        where: '$colId=?', whereArgs: [note.id]);
 */
