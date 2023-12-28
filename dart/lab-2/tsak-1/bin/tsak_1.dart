class SimpleTime {
  int hours;
  int minutes;
  int seconds;
  int nanoseconds;

  SimpleTime({this.hours = 0, this.minutes = 0, this.seconds = 0, this.nanoseconds = 0});

  int toSecondOfDay() => hours * 3600 + minutes * 60 + seconds;

  int toNanoOfDay() => toSecondOfDay() * 1000000000 + nanoseconds;
}

void main(List<String> arguments) {

  SimpleTime currentTime = SimpleTime(minutes: 30, seconds: 15);

  print("Seconds passed from the beginning of the day: ${currentTime.toSecondOfDay()} s");
  print("Nanoseconds passed from the beginning of the day: ${currentTime.toNanoOfDay()} ns");
}
