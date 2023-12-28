import '../models/client.dart';

extension ClientExtension on Client {
  String getFullInfo() {
    final name = this.name;
    final email = personalInfo?.email ?? "Unspecified";
    final country = personalInfo?.address?.country ?? "Unspecified";
    final city = personalInfo?.address?.city ?? "Unspecified";
    final street = personalInfo?.address?.street ?? "Unspecified";

    return "Name: $name\nEmail: $email\nCountry: $country \nCity: $city \nStreet: $street";
  }
}
