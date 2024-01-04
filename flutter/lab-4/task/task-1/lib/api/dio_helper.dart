import 'package:dio/dio.dart';

class DioHelper {
  DioHelper._();
  static final DioHelper instance = DioHelper._();

  factory DioHelper() => instance;

  final Dio _dio = Dio(
    BaseOptions(baseUrl: "https://api.quotable.io/"),
  );

  Future<dynamic> getData(String url) async {
    try {
      final response = await _dio.get(url);
      return response.data;
    } catch (error) {
      throw DioException(error: error, requestOptions: RequestOptions());
    }
  }
}
