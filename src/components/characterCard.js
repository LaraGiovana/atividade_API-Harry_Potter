import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CharacterCard({ character, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {character.image ? (
        <Image source={{ uri: character.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.noImage]}>
          <Text style={styles.noImageText}>?</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.text}>Casa: {character.house || 'Sem casa'}</Text>
        <Text style={styles.text}>Espécie: {character.species}</Text>
        <Text style={styles.text}>Ator: {character.actor || 'Não informado'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 110,
    borderRadius: 8,
  },
  noImage: {
    backgroundColor: '#0f3460',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    color: '#d4af37',
    fontSize: 30,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    color: '#d4af37',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});