import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from './colors'; 

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://w7.pngwing.com/pngs/993/650/png-transparent-user-profile-computer-icons-others-miscellaneous-black-profile-avatar.png' }} // URL de la foto de perfil
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileTitle}>Ingeniero de Software</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información de Contacto</Text>
        <View style={styles.contactInfo}>
          <Icon name="email" type="material" color={colors.primary} />
          <Text style={styles.contactText}>john.doe@example.com</Text>
        </View>
        <View style={styles.contactInfo}>
          <Icon name="phone" type="material" color={colors.primary} />
          <Text style={styles.contactText}>+1 234 567 890</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción Profesional</Text>
        <Text style={styles.sectionContent}>
          Ingeniero de software con más de 5 años de experiencia en desarrollo de aplicaciones móviles y web. Experto en React Native y Node.js.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
        <Text style={styles.experienceTitle}>Desarrollador de Software en XYZ Corp</Text>
        <Text style={styles.experienceDate}>Ene 2018 - Actualidad</Text>
        <Text style={styles.sectionContent}>
          Responsable del desarrollo y mantenimiento de aplicaciones móviles, trabajando en un equipo ágil utilizando React Native y otras tecnologías modernas.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Text style={styles.skill}>React Native</Text>
        <Text style={styles.skill}>Node.js</Text>
        <Text style={styles.skill}>Diseño UI/UX</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.primary,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileTitle: {
    fontSize: 18,
    color: '#fff',
  },
  section: {
    margin: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.textPrimary,
  },
  sectionContent: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.textSecondary,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: colors.textPrimary,
  },
  experienceDate: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 5,
  },
  skill: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.textPrimary,
  },
});
