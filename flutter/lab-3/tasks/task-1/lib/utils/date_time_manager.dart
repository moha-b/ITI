class DateTimeManager {
  static String currentDateTime() {
    DateTime dateTime = DateTime.now();
    return '${dateTime.day}-${dateTime.month}${dateTime.year} ${dateTime.hour}:${dateTime.minute}:${dateTime.second}';
  }
}
