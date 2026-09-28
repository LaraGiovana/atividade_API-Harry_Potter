import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const HOUSE_COLORS = {
  Gryffindor: '#740001',
  Slytherin: '#1a472a',
  Ravenclaw: '#0e1a40',
  Hufflepuff: '#c9a227',
};

function StatCard({ label, value }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

export default function DetailsScreen({ route }) {
  const { character } = route.params;
  const accentColor = HOUSE_COLORS[character.house] || '#7a5c00';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={[styles.hero, { backgroundColor: accentColor }]}>
        {character.image ? (
          <Image source={{ uri: character.image }} style={styles.heroImage} />
        ) : (
          <View style={[styles.heroImage, styles.noImage]}>
            <Text style={styles.noImageText}>?</Text>
          </View>
        )}

        <View style={styles.heroOverlay}>
          <Text style={styles.name}>{character.name}</Text>
          {character.house ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{character.house}</Text>
            </View>
          ) : null}
        </View>
      </View>

      <View style={styles.body}>
        {character.alternate_names && character.alternate_names.length > 0 && (
          <View style={styles.altNamesBox}>
            <Text style={styles.altNamesLabel}>Também conhecido(a) como</Text>
            <Text style={styles.altNamesValue}>
              {character.alternate_names.join(', ')}
            </Text>
          </View>
        )}

        <View style={styles.grid}>
          <StatCard label="Espécie" value={character.species || '—'} />
          <StatCard label="Gênero" value={character.gender || '—'} />
          <StatCard label="Nascimento" value={character.dateOfBirth || '—'} />
          <StatCard label="Ascendência" value={character.ancestry || '—'} />
          <StatCard label="Olhos" value={character.eyeColour || '—'} />
          <StatCard label="Cabelo" value={character.hairColour || '—'} />
          <StatCard label="Patrono" value={character.patronus || '—'} />
          <StatCard
            label="Varinha"
            value={
              character.wand && character.wand.wood
                ? `${character.wand.wood}${character.wand.core ? ' / ' + character.wand.core : ''}`
                : '—'
            }
          />
        </View>

        <View style={styles.tagsRow}>
          <View style={[styles.tag, { backgroundColor: character.alive ? '#1a472a' : '#4a0000' }]}>
            <Text style={styles.tagText}>{character.alive ? 'Vivo' : 'Falecido'}</Text>
          </View>
          {character.hogwartsStudent && (
            <View style={[styles.tag, { backgroundColor: '#3a2f00' }]}>
              <Text style={styles.tagText}>Estudante</Text>
            </View>
          )}
          {character.hogwartsStaff && (
            <View style={[styles.tag, { backgroundColor: '#3a2f00' }]}>
              <Text style={styles.tagText}>Funcionário</Text>
            </View>
          )}
        </View>

        <View style={styles.actorBox}>
          <Text style={styles.actorLabel}>Interpretado por</Text>
          <Text style={styles.actorValue}>{character.actor || 'Não informado'}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d17',
  },
  hero: {
    width: '100%',
    height: 380,
    justifyContent: 'flex-end',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    opacity: 0.55,
  },
  noImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    color: '#fff',
    fontSize: 80,
    opacity: 0.4,
  },
  heroOverlay: {
    padding: 20,
    backgroundColor: 'rgba(13,13,23,0.55)',
  },
  name: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  body: {
    padding: 16,
    marginTop: -24,
  },
  altNamesBox: {
    backgroundColor: '#181826',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  altNamesLabel: {
    color: '#8a8aa3',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  altNamesValue: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
  width: '48%',
  backgroundColor: '#181826',
  borderRadius: 14,
  padding: 14,
  marginBottom: 10,
},
  statLabel: {
    color: '#8a8aa3',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
    marginBottom: 16,
  },
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
  actorBox: {
    backgroundColor: '#181826',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  actorLabel: {
    color: '#8a8aa3',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  actorValue: {
    color: '#d4af37',
    fontSize: 18,
    fontWeight: '700',
  },

});