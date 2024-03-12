import React from "react";
import { SafeAreaView, ScrollView, View, Text, Pressable } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

// Test data
const testData = {
  styles: {
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    hr: {
      height: 1,
      backgroundColor: 'grey',
      marginVertical: 8,
    },
    button: {
      backgroundColor: '#3b5998',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      marginVertical: 5,
      elevation: 3, // shadow for Android
      shadowColor: "#000", // shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      padding: 10,
    },
    boldText: {
      fontWeight: 'bold',
    },
  },
  title: 'App Menu',
  copy: 'Routes',
};

function AppMenu() {
  return (
    <SafeAreaView style={testData.styles.container}>
      <ScrollView>
        <AppRoutes />
        <View style={testData.styles.hr} />
      </ScrollView>
    </SafeAreaView>
  );
}

function AppRoutes() {
  const navigation = useNavigation();
  const routes = useNavigationState((state) =>
    state.routeNames.filter((name) => name !== testData.title)
  );

  const links = routes.map((route) => {
    return (
      <Pressable
        onPress={() => navigation.navigate(route)}
        key={route}
        style={testData.styles.button}
      >
        <Text style={testData.styles.buttonText}>{route}</Text>
      </Pressable>
    );
  });
  return (
    <View>
      <Text style={testData.styles.text}>
        {testData.copy} ({routes.length})
      </Text>
      {links}
    </View>
  );
}

export default {
  title: "App Menu",
  navigator: AppMenu
};
