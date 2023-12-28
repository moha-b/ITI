
import 'extentation/extentation.dart';
import 'models/models.dart';

void main() {
  var alice = Client(
    name: 'alice',
    personalInfo: PersonalInfo(
      email: 'hab@gmail.com',
      address: Address("country", "city", "street"),
    ),
  );
  print(alice.getFullInfo());

  var hab = Client(
    name: 'alice',
    personalInfo: PersonalInfo(
      email: 'hab@gmail.com',
    ),
  );
  print(hab.getFullInfo());
}
