import '../models/quote.dart';
import 'dio_helper.dart';

class ApiService {
  ApiService._();
  static final ApiService instance = ApiService._();

  Future<Quote> fetchQuote() async {
    try {
      final response = await DioHelper.instance.getData('quotes/random');
      Quote quote = Quote.fromJson(response[0]);
      print(quote.content);
      return quote;
    } catch (error) {
      print(error);
      rethrow;
    }
  }
}
