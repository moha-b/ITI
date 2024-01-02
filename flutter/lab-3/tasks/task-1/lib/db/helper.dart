import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';
import 'package:task1/db/constants.dart';

class Helper {
  //1- single instance
  Helper._();

  static final Helper helper = Helper._();

  //2-db path
  Future<String> _getDbPath() async {
    String path = await getDatabasesPath();
    String dbPath = join(path, DB_NAME);
    return dbPath;
  }

  //3-create db
  Future<Database> createOrOpen() async {
    String path = await _getDbPath();
    return openDatabase(path,
        version: DB_VERSION,
        onCreate: (db, version) => _onTableCreated(db),
        singleInstance: true);
  }

  void _onTableCreated(Database db) {
    try {
      String sql =
          'create table $TABLE_NAME($colId integer primary key autoincrement, $colTitle text, $colText text, $colDate text, $colColor integer)';
      db.execute(sql);
    } on DatabaseException catch (e) {
      print(e.toString());
    }
  }
}
