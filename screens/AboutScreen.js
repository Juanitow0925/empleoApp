import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from './colors'; 

export default function AboutScreen() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Acerca de MiApp de Empleo</Text>
      <Text style={styles.description}>
        MiApp de Empleo es una plataforma diseñada para conectar a los profesionales con sus oportunidades laborales ideales. Nuestra misión es facilitar el proceso de búsqueda de empleo y ayudar a las empresas a encontrar talento excepcional.
      </Text>

      {/* Sección de Misión */}
      <Text style={styles.sectionTitle}>Nuestra Misión</Text>
      <Text style={styles.text}>
        Ayudar a los profesionales a crecer y alcanzar sus metas laborales, proporcionando una plataforma intuitiva, eficiente y accesible para la búsqueda de empleo.
      </Text>

      {/* Sección de Visión */}
      <Text style={styles.sectionTitle}>Nuestra Visión</Text>
      <Text style={styles.text}>
        Ser la aplicación líder en la búsqueda de empleo, reconocida por nuestro impacto positivo en la vida profesional de millones de personas.
      </Text>

      {/* Información de Contacto */}
      <Text style={styles.sectionTitle}>Contacto</Text>
      <Text style={styles.text}>Email: contacto@miappdeempleo.com</Text>
      <Text style={styles.text}>Teléfono: +1 (123) 456-7890</Text>

      {/* Redes Sociales */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/miappdeempleo')}>
          <Icon name="facebook" type="font-awesome" color={colors.primary} size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.twitter.com/miappdeempleo')}>
          <Icon name="twitter" type="font-awesome" color={colors.primary} size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/company/miappdeempleo')}>
          <Icon name="linkedin" type="font-awesome" color={colors.primary} size={40} />
        </TouchableOpacity>
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
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
