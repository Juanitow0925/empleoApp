import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from './colors'; 

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }


    Alert.alert('Éxito', '¡Registro exitoso!');
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>MiApp de Empleo</Text>
      <Text style={styles.title}>Registro</Text>
      <View style={styles.inputContainer}>
        <Icon name="email" type="material" color={colors.primary} containerStyle={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
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
      <View style={styles.inputContainer}>
        <Icon name="lock" type="material" color={colors.primary} containerStyle={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" onPress={handleRegister} />
      </View>
      <View style={styles.linkContainer}>
        <Text>¿Ya tienes una cuenta?</Text>
        <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
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
    marginTop: 20,
  },
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
