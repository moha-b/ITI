import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:meta/meta.dart';
import 'package:task_1/models/quote.dart';
import 'package:task_1/network/api.dart';

part 'quote_state.dart';

class QuoteCubit extends Cubit<QuoteState> {
  QuoteCubit() : super(QuoteInitial());

  fetchWeather() async {
    try {
      emit(QuoteInitial());
      var result = await ApiService.instance.fetchQuote();
      if (result != null) {
        print("cubit");
        emit(QuoteSuccess(result));
      } else {
        emit(QuoteFailure());
      }
    } catch (error) {
      print('Error fetching quote: $error');
      emit(QuoteFailure());
    }
  }
}
