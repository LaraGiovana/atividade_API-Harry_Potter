import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { getCharacters } from '../services/api';
import CharacterCard from '../components/characterCard.js';

export default function ListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadCharacters();
  }, []);

  async function loadCharacters() {
    try {
      const data = await getCharacters();
      setCharacters(data);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>Carregando personagens...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>Erro ao carregar os dados da API.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onPress={() => navigation.navigate('Detalhes', { character: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 12,
  },
  center: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 18,
  },
});