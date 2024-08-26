import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from './colors'; 


const recentActivities = [
  { id: '1', activity: 'Has aplicado a 3 nuevas ofertas de empleo.' },
  { id: '2', activity: 'Tienes 1 entrevista programada para mañana.' },
  { id: '3', activity: 'Actualizaste tu perfil laboral hace 2 días.' },
];

const jobTips = [
  { id: '1', tip: 'Consejos para una entrevista exitosa.' },
  { id: '2', tip: 'Cómo mejorar tu perfil de LinkedIn.' },
  { id: '3', tip: 'Las habilidades más demandadas en 2024.' },
];

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard </Text>

      <Text style={styles.sectionTitle}>Resumen de Actividades</Text>
      <FlatList
        data={recentActivities}
        renderItem={({ item }) => <Text style={styles.activity}>{item.activity}</Text>}
        keyExtractor={item => item.id}
      />

      <Text style={styles.sectionTitle}>Acceso Rápido</Text>
      <View style={styles.quickAccessContainer}>
        <TouchableOpacity style={styles.quickAccessButton} onPress={() => navigation.navigate('JobOffersScreen')}>
          <Icon name="briefcase" type="feather" color={colors.primary} />
          <Text style={styles.quickAccessText}>Ver Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton} onPress={() => navigation.navigate('ProfileScreen')}>
          <Icon name="user" type="feather" color={colors.primary} />
          <Text style={styles.quickAccessText}>Mi Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton} onPress={() => navigation.navigate('MessagesScreen')}>
          <Icon name="message-circle" type="feather" color={colors.primary} />
          <Text style={styles.quickAccessText}>Mensajes</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Consejos Laborales</Text>
      <FlatList
        data={jobTips}
        renderItem={({ item }) => <Text style={styles.tip}>{item.tip}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 10, 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: colors.primary,
  },
  activity: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickAccessButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  quickAccessText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.primary,
  },
  tip: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});