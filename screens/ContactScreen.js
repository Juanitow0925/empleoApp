import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from './colors'; 

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {

    Alert.alert('Mensaje Enviado', 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contáctanos</Text>

      <View style={styles.contactInfo}>
        <Icon name="email" type="material" color={colors.primary} />
        <Text style={styles.text}>Email: contacto@miappdeempleo.com</Text>
      </View>
      
      <View style={styles.contactInfo}>
        <Icon name="phone" type="material" color={colors.primary} />
        <Text style={styles.text}>Teléfono: +1 (123) 456-7890</Text>
      </View>

      <View style={styles.contactInfo}>
        <Icon name="map-marker" type="font-awesome" color={colors.primary} />
        <Text style={styles.text}>Dirección: Calle Ficticia 123, Ciudad Ejemplo</Text>
      </View>

      {/* Formulario de contacto */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Asunto"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Mensaje"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Button title="Enviar" onPress={handleSendMessage} color={colors.primary} />

      {/* Redes Sociales */}
      <View style={styles.socialContainer}>
        <Icon
          name="facebook"
          type="font-awesome"
          color={colors.primary}
          onPress={() => openLink('https://www.facebook.com/miappdeempleo')}
        />
        <Icon
          name="twitter"
          type="font-awesome"
          color={colors.primary}
          onPress={() => openLink('https://www.twitter.com/miappdeempleo')}
        />
        <Icon
          name="linkedin"
          type="font-awesome"
          color={colors.primary}
          onPress={() => openLink('https://www.linkedin.com/company/miappdeempleo')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.textSecondary,
  },
  input: {
    height: 40,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
