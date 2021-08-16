import React, { useEffect, useState, useContext } from 'react';
import { OptionsContext, GlobalOptionsContext } from "@options";
import { Text, View, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import HTML from "react-native-render-html";


const TermsAndConditions = ({ navigation }) => {

  const options = useContext(OptionsContext);
  const contentWidth = useWindowDimensions().width;
  const [htmlContent, setHtmlContent] = useState('<h1>No Terms and Conditions Loaded</h1>');
  
  useEffect(() => {
    //Set your API's URL via Module Options - in options.js
    fetch(options.url)
      .then(response => response.json())
      .then(data => setHtmlContent(data[0]['body']))
      .catch(err => alert("Terms and Conditions could not be loaded at this time."));
  });


  return (
    <View style={{flex: 1}}>
      <View style={options.styles.heading}>
        <TouchableOpacity
          style={options.styles.touchableopacity}
          onPress={() => {
            navigation.goBack();
          }}>
        </TouchableOpacity>
        <Text style={options.styles.header}>{options.title}</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <HTML source={{html: htmlContent}} contentWidth={contentWidth} />
      </ScrollView>
    </View>
  );
};

export default {
  title: "Terms and Conditions",
  navigator: TermsAndConditions
}
