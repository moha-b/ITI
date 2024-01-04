import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:task_1/cubit/image_cubit.dart';
import 'package:task_1/cubit/quote_cubit.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: MultiBlocProvider(
        providers: [
          BlocProvider(
            create: (context) => QuoteCubit()..fetchWeather(),
          ),
          BlocProvider(
            create: (context) => ImageCubit(),
          ),
        ],
        child: Scaffold(body: BlocBuilder<ImageCubit, ImageState>(
          builder: (context, state) {
            return Container(
              padding: EdgeInsets.all(16),
              decoration: BoxDecoration(
                  image: DecorationImage(
                      image: AssetImage(state.imageUrl), fit: BoxFit.cover)),
              child: BlocBuilder<QuoteCubit, QuoteState>(
                builder: (context, state) {
                  if (state is QuoteSuccess) {
                    return Column(
                      children: [
                        Expanded(
                          child: Center(
                            child: Text(state.quote.content,
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                    color: Colors.white, fontSize: 30)),
                          ),
                        ),
                        Expanded(
                            child: Center(
                                child: Text(state.quote.author,
                                    style: TextStyle(
                                        color: Colors.white, fontSize: 30)))),
                        Expanded(
                            child: Center(
                                child: ElevatedButton(
                          onPressed: () {
                            context.read<QuoteCubit>().fetchWeather();
                            context.read<ImageCubit>().changeImage();
                          },
                          child: const Text("New Quote"),
                        ))),
                      ],
                    );
                  } else if (state is QuoteFailure) {
                    return const Center(child: Text("Error"));
                  } else if (state is QuoteInitial) {
                    return const Center(child: CircularProgressIndicator());
                  } else {
                    return const Center(child: Text("Unhandl"));
                  }
                },
              ),
            );
          },
        )),
      ),
    );
  }
}
