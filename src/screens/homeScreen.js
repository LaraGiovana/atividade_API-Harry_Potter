import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Harry Potter</Text>
      <Text style={styles.subtitle}>Guia de Personagens</Text>

      <Text style={styles.description}>
        Aplicativo que consome a HP API e mostra os personagens do mundo de
        Harry Potter.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lista')}
      >
        <Text style={styles.buttonText}>Ver personagens</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    color: '#d4af37',
    fontSize: 36,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  description: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#d4af37',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#1a1a2e',
    fontSize: 18,
    fontWeight: 'bold',
  },
});