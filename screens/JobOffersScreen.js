import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from './colors'; 

const jobOffers = [
  {
    id: '1',
    title: 'Auxiliar de Despacho',
    company: 'Adecco Colombia S.A.',
    location: 'Bogotá, D.C.',
    salary: 'N/A',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Asesor comercial',
    company: 'GRUPO ALIANZA',
    location: 'Bogotá, D.C.',
    salary: '$ 1.300.000,00 (Mensual)',
    rating: 4.2,
  },
  {
    id: '3',
    title: 'Asesor sac call center',
    company: 'Emtelco CX & BPO',
    location: 'Bogotá, D.C.',
    salary: '$ 1.420.000,00 (Mensual)',
    rating: 4.5,
  },
];

export default function JobOffersScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.offerContainer} onPress={() => navigation.navigate('JobDetails', { job: item })}>
      <View style={styles.ratingContainer}>
        <Icon name="star" type="font-awesome" size={14} color={colors.yellow} />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
      <View style={styles.offerDetails}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text>{item.company}</Text>
        <Text>{item.location}</Text>
        {item.salary && <Text style={styles.salary}>{item.salary}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ofertas de Empleo</Text>
      <FlatList
        data={jobOffers}
        renderItem={renderItem}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
  },
  offerContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  rating: {
    fontSize: 16,
    marginLeft: 4,
  },
  offerDetails: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  salary: {
    color: colors.secondary,
    fontWeight: '600',
  },
});