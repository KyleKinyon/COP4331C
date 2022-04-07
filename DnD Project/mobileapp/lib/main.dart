import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

const backendAddress = String.fromEnvironment('backendAddress',
    defaultValue: '192.168.0.165:8080');

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  void login() async {
    try {
      var url = Uri.parse('https://cop4331-dnd.herokuapp.com/auth/login');
      // var url = Uri.parse('https://randomuser.me/api/?results=2');
      print(url);
      var response = await http.post(url,
          body: {'username': 'Password=Sneaky', 'password': 'Sneaky'});

      // var response = await http.get(url);
      print('Response status: ${response.statusCode}');
      print('Response body: ${response.body}');
    } catch (error) {
      print(error);
    }
    // print(await http.read(Uri.parse('https://example.com/foobar.txt')));
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: Scaffold(
          appBar: AppBar(title: const Text("DnD 25")),
          body: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              const Expanded(
                  child: Padding(
                      padding:
                          EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                      child: Text(
                        "Hello World",
                        textAlign: TextAlign.center,
                      ))),
              Expanded(
                  flex: 2,
                  child: Column(children: [
                    const Padding(
                      padding:
                          EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                      child: TextField(
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: 'Username',
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 16, vertical: 12),
                      child: TextFormField(
                        decoration: const InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: 'Password',
                        ),
                      ),
                    ),
                    Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 16, vertical: 12),
                        child: Row(
                          children: [
                            TextButton(
                                onPressed: () {},
                                child: const Text("Click here to sign up")),
                            Expanded(
                                child: ElevatedButton(
                                    onPressed: () async {
                                      login();
                                    },
                                    child: const Text("Login")))
                          ],
                        ))
                  ]))
            ],
          )),
    );
  }
}
