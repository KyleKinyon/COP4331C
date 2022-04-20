import '../auth/auth_util.dart';
import '../flutter_flow/flutter_flow_icon_button.dart';
import '../flutter_flow/flutter_flow_theme.dart';
import '../flutter_flow/flutter_flow_util.dart';
import '../flutter_flow/random_data_util.dart' as random_data;
import 'package:flutter/material.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import '../utils/User.dart';
import '../utils/Character.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:google_fonts/google_fonts.dart';

class Dashboard2Widget extends StatefulWidget {
  const Dashboard2Widget({Key key, this.user}) : super(key: key);
  final User user;

  @override
  _Dashboard2WidgetState createState() => _Dashboard2WidgetState();
}

class _Dashboard2WidgetState extends State<Dashboard2Widget> {
  final scaffoldKey = GlobalKey<ScaffoldState>();

  Future<List<Character>> getChars() async {
    final response = await http.post(Uri.parse('https://cop4331-dnd.herokuapp.com/mobile/selectCharacter'),
      headers: <String, String>{
        'Content-Type' : 'application/json; charset=UTF-8',
        'Authorization' : 'Bearer accesstoken',
      },
    );
    if (response.statusCode == 200) {
      var CharObjsJson = jsonDecode(response.body)['characters'] as List;
      List<Character> charlist = CharObjsJson.map((characterJson) => Character.fromJson(characterJson)).toList();
      return charlist;
    }
    return null;
  }

  @override
  Widget build(BuildContext context) {
    Future<List<Character>> characters = getChars();

    return Scaffold(
      key: scaffoldKey,
      appBar: AppBar(
        backgroundColor: Color(0x066E726E),
        automaticallyImplyLeading: false,
        leading: InkWell(
          onTap: () async {
            Navigator.pop(context);
          },
          child: Icon(
            Icons.arrow_back_rounded,
            color: FlutterFlowTheme.of(context).darkSienna,
            size: 24,
          ),
        ),
        title: Text(
          'Dashboard',
          style: FlutterFlowTheme.of(context).bodyText1.override(
            fontFamily: 'Lexend Deca',
            color: Color(0xFF14181B),
            fontSize: 14,
            fontWeight: FontWeight.w500,
          ),
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
            onPressed: () {
              print('IconButton pressed ...');
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
              child: FutureBuilder(
                future: characters,
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    return ListView.builder(
                      padding: EdgeInsets.zero,
                      scrollDirection: Axis.vertical,
                      itemCount: snapshot.data.length,
                      itemBuilder: (context, charactersIndex) {
                        final charactersItem = snapshot.data[charactersIndex];
                        return ListTile(
                          title: Text(
                            currentUserDisplayName,
                            style: FlutterFlowTheme.of(context).title3,
                          ),
                          trailing: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xFF303030),
                            size: 20,
                          ),
                          tileColor: Color(0xFFF5F5F5),
                          dense: false,
                        );
                      },
                    );
                  }
                  else if (snapshot.hasError) {

                  }

                  return const CircularProgressIndicator();

                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}