import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ContactScreen() {
  const contactText = 'Dit is de contactpagina van de Todo App, gemaakt door Yuna!!! Ik ga hier gewoon maar wat text zetten omdat ik niet goed weet wat ik er moet zetten. Ik ga al wel zeggen, Dit is mijn Facebook: https://Facebook.com/yuna, Dit is mijn instagram https://Instagram.com/yuna, dit is mijn LinkedIn: https://LinkedIn.com/yuna voor de rest ga ik hier gewoon wat extra text zetten om de functionalteit van de Scrollview goed te kunnen tonen <3'
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>{contactText}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,

  },
  text: {
    fontSize: 40,
  },
});