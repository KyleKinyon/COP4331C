import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

export type MainStackParams = {
  Home: undefined;
};

const MainStack = createStackNavigator<MainStackParams>();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    {/* <MainStack.Screen name="List" component={List} /> */}
    {/* <MainStack.Screen
      name="TextDemo"
      component={TextDemo}
      options={{ headerTitle: 'Text Demo' }}
    />
    */}
  </MainStack.Navigator>
);
