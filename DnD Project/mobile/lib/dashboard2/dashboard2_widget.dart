import 'package:test2/character_page/character_page_widget.dart';
import 'package:test2/profile_page/profile_page_widget.dart';

import '../auth/auth_util.dart';
import '../flutter_flow/flutter_flow_icon_button.dart';
import '../flutter_flow/flutter_flow_theme.dart';
import '../flutter_flow/flutter_flow_util.dart';
import '../flutter_flow/random_data_util.dart' as random_data;
import 'package:flutter/material.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:localstorage/localstorage.dart';
import '../utils/User.dart';
import '../utils/Character.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:google_fonts/google_fonts.dart';

class Dashboard2Widget extends StatefulWidget {
  const Dashboard2Widget({Key key, this.user, this.characters}) : super(key: key);
  final User user;
  final List<Character> characters;

  @override
  _Dashboard2WidgetState createState() => _Dashboard2WidgetState();
}

class _Dashboard2WidgetState extends State<Dashboard2Widget> {
  final scaffoldKey = GlobalKey<ScaffoldState>();
  final LocalStorage storage = new LocalStorage('localStorage');


  void refreshToken() async {
    final refreshToken = await storage.getItem('refreshToken');
    final response = await http.post(Uri.parse('https://cop4331-dnd.herokuapp.com/mobile/refreshToken'),
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'refreshToken': refreshToken,
      })
    );
    if (response.statusCode == 200) {
      Map<String, dynamic> tokens = jsonDecode(response.body);
      storage.setItem('accessToken', tokens['accessToken']);
      storage.setItem('refreshToken', tokens['refreshToken']);
    }

  }

  Future<List<Character>> getChars() async {
    try {
      final accessToken = storage.getItem('accessToken');
      final response = await http.get(Uri.parse('https://cop4331-dnd.herokuapp.com/char/selectCharacter'),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer $accessToken',
        },
      );

      if (response.statusCode == 200) {
        var charObjsJson = jsonDecode(response.body)['characters'] as List;
        List<Character> charlist = charObjsJson.map((characterJson) =>
            Character.fromJson(characterJson)).toList();
        return charlist;
      }
      else
        return null;
    } catch(error) {
      return null;
    }
  }

  @override
  Widget build(BuildContext context) {

    refreshToken();

    return Scaffold(
      key: scaffoldKey,
      appBar: AppBar(
        backgroundColor: Colors.white,
        automaticallyImplyLeading: false,
        leading: InkWell(
          onTap: () async {
            Navigator.pop(context);
          },
          child: Icon(
            Icons.arrow_back_rounded,
            color: Color(0x066E726E),
            size: 24,
          ),
        ),
        title: Text(
          'Dashboard',
          style: FlutterFlowTheme.of(context).bodyText1,
        ),
        actions: [
          FlutterFlowIconButton(
            borderColor: Colors.transparent,
            borderRadius: 30,
            borderWidth: 1,
            buttonSize: 60,
            icon: Icon(
              Icons.person_outlined,
              color: FlutterFlowTheme.of(context).darkSienna,
              size: 30,
            ),
            onPressed: () async {
              await Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) =>
                      ProfilePageWidget(user: widget.user),
                ),
                //(r) => false,
              );
            },
          ),
        ],
        centerTitle: true,
        elevation: 2,
      ),
      body: SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              constraints: BoxConstraints(
                maxHeight: double.infinity,
              )
            ),
            Row(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: Container(
                    height: 240,
                    child: Stack(
                      alignment: AlignmentDirectional(-0.95, -0.7),
                      children: [
                        Align(
                          alignment: AlignmentDirectional(0, 0),
                          child: Image.asset(
                            'assets/images/954c316be675cee73eb91306bc1bb954.jpg',
                            width: MediaQuery.of(context).size.width,
                            height: 240,
                            fit: BoxFit.cover,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
            Column(
              mainAxisSize: MainAxisSize.max,
              children: [
                Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Padding(
                      padding: EdgeInsetsDirectional.fromSTEB(24, 12, 0, 12),
                      child: Text(
                        'Characters',
                        style: FlutterFlowTheme.of(context).bodyText1.override(
                          fontFamily: 'Lexend Deca',
                          color: Color(0xFF090F13),
                          fontSize: 14,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
            Expanded(
              child: Builder(
                builder: (context) {
                    return ListView.builder(
                      padding: EdgeInsetsDirectional.fromSTEB(24, 12, 0, 12),
                      scrollDirection: Axis.vertical,
                      itemCount: widget.characters.length,
                      itemBuilder: (context, charactersIndex) {
                        return ListTile(
                          title: Text(
                            widget.characters[charactersIndex].charName,
                            style: FlutterFlowTheme
                                .of(context)
                                .title3,
                          ),
                          subtitle : Text(
                            widget.characters[charactersIndex].className,
                          ),
                          trailing: IconButton(
                            icon: const Icon(Icons.arrow_forward_ios),
                            color: Color(0xFF303030),
                            onPressed: () async {
                              final Character passedChar = widget.characters[charactersIndex];
                              await Navigator.push(
                                  context,
                                  MaterialPageRoute(
                              builder : (context) =>
                                CharacterPageWidget(character : widget.characters[charactersIndex]),
                              ),
                              // (r) => false,
                              );
                            },
                          ),
                          tileColor: Color(0xFFF5F5F5),
                          dense: false,
                        );
                      },
                    );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
