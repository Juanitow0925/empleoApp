import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from './colors'; 

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Drawer'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>MiApp de Empleo</Text>
      <Text style={styles.title}>Inicia Sesión</Text>
      <View style={styles.inputContainer}>
        <Icon name="email" type="material" color={colors.primary} containerStyle={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" type="material" color={colors.primary} containerStyle={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
      </View>
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
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.primary,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    marginBottom: 10, 
  },
});
