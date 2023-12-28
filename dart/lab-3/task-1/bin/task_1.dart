import 'models/runner.dart';
void main(List<String> arguments) {

  List<Runner> runners = [
    Runner('Ahmed', 341),
    Runner('Mohamed', 273),
    Runner('Ismail', 278),
    Runner('Hend', 329),
    Runner('Aly', 445),
    Runner('Hossam', 402),
    Runner('Ola', 388),
    Runner('Alaa', 275),
    Runner('Basma', 243),
    Runner('Mina', 334),
    Runner('Nada', 412),
    Runner('Saad', 393),
  ];

  Runner fastestRunner = runners.reduce((prev, current) {
    return (current.time < prev.time) ? current : prev;
  });

  List<Runner> runnersExceptFastest = List.from(runners);
  runnersExceptFastest.remove(fastestRunner);

  Runner secondFastestRunner = runnersExceptFastest.reduce((prev, current) {
    return (current.time < prev.time) ? current : prev;
  });

  print('Fastest Runner: ${fastestRunner.name}, Time: ${fastestRunner.time} minutes');
  print('Second Fastest Runner: ${secondFastestRunner.name}, Time: ${secondFastestRunner.time} minutes');

}
