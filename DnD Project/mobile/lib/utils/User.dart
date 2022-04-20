import 'package:mongo_dart/mongo_dart.dart';

class User {
  final String username;
  final String password;
  final String firstName;
  final String lastName;
  final String email;
  final bool verified;
  final String sessionName;
  final String accessToken;

  const User({
    this.username,
    this.password,
    this.firstName,
    this.lastName,
    this.email,
    this.verified,
    this.sessionName,
    this.accessToken,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      username: json['username'],
      password: json['password'],
      firstName: json['firstName'],
      lastName: json['lastName'],
      email: json['email'],
      verified: json['verified'],
      sessionName: json['sessionName'],
      accessToken: json['accessToken'],
    );
  }
}