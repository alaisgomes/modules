import React from "react";
import { View, Text } from "react-native";

function TestModule() {
  return (
    <View>
      <Text>test-module</Text>
    </View>
  );
}

export default {
  title: "test-module",
  navigator: TestModule
};
