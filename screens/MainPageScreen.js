import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import colors from './colors'; 

export default function MainPageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a MiApp de Empleo</Text>
      <Text style={styles.description}>
        Aquí puedes encontrar ofertas de empleo, gestionar tu perfil, y más.
      </Text>
      <Button title="Ir al Dashboard" onPress={() => navigation.navigate('Drawer')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.textSecondary,
  },
});
