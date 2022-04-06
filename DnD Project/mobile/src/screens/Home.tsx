import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Divider, List } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  image: {
    height: 40,
    width: 40,
    margin: 8,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
});

const arr = ["Hello", "World", "Alex"];

const ListSectionExample = () => {
  const {
    colors: { background },
  } = useTheme();

  return (
    <ScrollView
      style={[styles.container, styles.column, { backgroundColor: background }]}
    >
      <Text>Home Screen</Text>
      <List.Section>
        <List.Subheader>Single line</List.Subheader>
        {arr.map((item, i) => (
          <List.Item
            key={i}
            title={item}
            left={(props) => <List.Icon {...props} icon="calendar" />}
          />
        ))}
      </List.Section>
      <Divider />
      <View style={[styles.container, styles.column]}>
        <View style={{ width: "60%" }}>
          <Button
            mode="contained"
            onPress={() => console.log("Hello")}
            // style={{ width: "60%" }}
          >
            Sign out
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

ListSectionExample.title = "List.Section";
export default ListSectionExample;

// export default function HomeScreen() {
//   return (
//     <ScrollView style={[styles.container]}>
// <Text style={{}}>Home Screen</Text>
// <View
//   style={{
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//   <List.Section>
//     <List.Subheader>aassssss</List.Subheader>
//     <List.Item title={arr[0]} left={() => <List.Icon icon="folder" />} />
//     <List.Item
//       title="Second Item"
//       left={() => <List.Icon color="#000" icon="folder" />}
//     />
//   </List.Section>
// </View>

//     </ScrollView>
//   );
// }
