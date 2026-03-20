import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.name}>Christie Doe</Text>
          </View>
          <Image 
            source={require('../assets/MaskGroup.png')}
            style={styles.avatar} 
          />
        </View>

        <Text style={styles.sectionTitle}>Your Insights</Text>

        <View style={styles.grid}>
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Scan')} 
          >
            <View style={[styles.iconContainer, { backgroundColor: '#EBE4FF' }]}>
              <Image source={require('../assets/Group 157.png')} style={styles.iconImage} />
            </View>
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSub}>Scanned 483</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: '#FFEBEA' }]}>
              <Image source={require('../assets/Frame.png')} style={styles.iconImage} />
            </View>
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSub}>Counterfeited 32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: '#E4F8F0' }]}>
              <Image source={require('../assets/Group 158.png')} style={styles.iconImage} />
            </View>
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSub}>Checkouts 8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: '#E4F4FF' }]}>
              <Image source={require('../assets/Group 151.png')} style={styles.iconImage} />
            </View>
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSub}>History 26</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.exploreHeader}>
          <Text style={styles.sectionTitle}>Explore More</Text>
          <TouchableOpacity>
            <Text style={styles.arrowIcon}>→</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.exploreList}
        >
          <View style={styles.exploreCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=200' }} 
              style={styles.exploreImage} 
            />
          </View>
          
          <View style={styles.exploreCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=200' }} 
              style={styles.exploreImage} 
            />
          </View>
          
          <View style={styles.exploreCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=200' }} 
              style={styles.exploreImage} 
            />
          </View>
        </ScrollView>

        <View style={{ height: 120 }} /> 

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 30, paddingHorizontal: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  name: { fontSize: 14, color: '#888', marginTop: 4 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 20, paddingHorizontal: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
  card: { 
    width: '47%', backgroundColor: '#FFF', padding: 20, borderRadius: 16, 
    marginBottom: 15, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2
  },
  iconContainer: { width: 50, height: 50, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  cardSub: { fontSize: 12, color: '#999', marginTop: 5 },
  iconImage: { width: 24, height: 24, resizeMode: 'contain' },
  exploreHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingRight: 20 },
  arrowIcon: { fontSize: 24, color: '#333', marginBottom: 15 },
  exploreList: { paddingLeft: 20 },
  exploreCard: {
    width: 120,
    height: 140,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  exploreImage: { width: '80%', height: '80%', resizeMode: 'contain' }
});