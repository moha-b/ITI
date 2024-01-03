import 'package:task_1/api/dio_helper.dart';

import '../onboarding/data/onboarding_model.dart';

class ApiService {
  ApiService._();
  static final ApiService instance = ApiService._();

  Future<List<Quote>> fetchQuotes() async {
    try {
      final response = await DioHelper.instance.getData('quotes');
      final List<dynamic> results = response['results'];
      return results.map((quoteJson) => Quote.fromJson(quoteJson)).toList();
    } catch (error) {
      print(error);
      rethrow;
    }
  }
}
