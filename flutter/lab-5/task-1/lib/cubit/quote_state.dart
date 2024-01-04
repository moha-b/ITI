part of 'quote_cubit.dart';

@immutable
abstract class QuoteState {}

class QuoteInitial extends QuoteState {}

class QuoteSuccess extends QuoteState {
  Quote quote;

  QuoteSuccess(this.quote);
}

class QuoteFailure extends QuoteState {}
