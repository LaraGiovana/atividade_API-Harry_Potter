import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { character } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {character.image ? (
        <Image source={{ uri: character.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.noImage]}>
          <Text style={styles.noImageText}>?</Text>
        </View>
      )}

      <Text style={styles.name}>{character.name}</Text>

      <View style={styles.box}>
        <Text style={styles.text}>
          Outros nomes:{' '}
          {character.alternate_names && character.alternate_names.length > 0
            ? character.alternate_names.join(', ')
            : 'Nenhum'}
        </Text>
        <Text style={styles.text}>Espécie: {character.species}</Text>
        <Text style={styles.text}>Gênero: {character.gender}</Text>
        <Text style={styles.text}>Casa: {character.house || 'Sem casa'}</Text>
        <Text style={styles.text}>
          Nascimento: {character.dateOfBirth || 'Não informado'}
        </Text>
        <Text style={styles.text}>
          Ascendência: {character.ancestry || 'Não informada'}
        </Text>
        <Text style={styles.text}>
          Cor dos olhos: {character.eyeColour || 'Não informada'}
        </Text>
        <Text style={styles.text}>
          Cor do cabelo: {character.hairColour || 'Não informada'}
        </Text>
        <Text style={styles.text}>
          Patrono: {character.patronus || 'Não informado'}
        </Text>
        <Text style={styles.text}>
          Varinha: {character.wand && character.wand.wood ? character.wand.wood : 'Não informada'}
          {character.wand && character.wand.core ? ' / ' + character.wand.core : ''}
        </Text>
        <Text style={styles.text}>
          Estudante de Hogwarts: {character.hogwartsStudent ? 'Sim' : 'Não'}
        </Text>
        <Text style={styles.text}>
          Funcionário de Hogwarts: {character.hogwartsStaff ? 'Sim' : 'Não'}
        </Text>
        <Text style={styles.text}>Vivo: {character.alive ? 'Sim' : 'Não'}</Text>
        <Text style={styles.text}>
          Ator: {character.actor || 'Não informado'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 280,
    borderRadius: 12,
    marginBottom: 16,
  },
  noImage: {
    backgroundColor: '#0f3460',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    color: '#d4af37',
    fontSize: 60,
  },
  name: {
    color: '#d4af37',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  box: {
    width: '100%',
    backgroundColor: '#16213e',
    borderRadius: 10,
    padding: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
});