import 'package:mongo_dart/mongo_dart.dart';

class Character {
  final String userId;
  final String id;
  final String charName;
  final String className;
  final int level;
  final String race;
  final int strength;
  final int dexterity;
  final int constitution;
  final int intelligence;
  final int charisma;
  final List equipment;
  final int wisdom;

  const Character({
    this.userId,
    this.id,
    this.charName,
    this.className,
    this.level,
    this.race,
    this.strength,
    this.dexterity,
    this.constitution,
    this.intelligence,
    this.charisma,
    this.equipment,
    this.wisdom
  });

  factory Character.fromJson(Map<String, dynamic> json) {
    return Character(
      userId: json['userId'],
      id: json['_id'],
      charName: json['charName'],
      className: json['class'],
      level: json['level'],
      race: json['race'],
      strength: json['strength'],
      dexterity: json['dexterity'],
      constitution: json['constitution'],
      intelligence: json['intelligence'],
      charisma: json['charisma'],
      equipment: json['equipment'],
      wisdom: json['wisdom'],
    );
  }
}
