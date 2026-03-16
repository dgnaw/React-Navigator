import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })}
      >
        <Text style={{ fontSize: 20, color: '#5C61F4' }}>{'<'}</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Image 
          source={require('../assets/paymentImage.png')} 
          style={styles.illustration} 
        />
        
        <Text style={styles.title}>Payment Success, Yayy!</Text>
        <Text style={styles.subtitle}>
          we will send order details and invoice in your contact no. and registered email
        </Text>

        <TouchableOpacity style={styles.detailsBtn}>
          <Text style={styles.detailsText}>Check Details →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  backButton: { width: 40, height: 40, backgroundColor: '#F4F5FF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  illustration: { width: 200, height: 200, resizeMode: 'contain', marginBottom: 30 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  subtitle: { textAlign: 'center', color: '#888', paddingHorizontal: 30, lineHeight: 22, marginBottom: 30 },
  detailsBtn: { padding: 10 },
  detailsText: { color: '#5C61F4', fontWeight: 'bold', fontSize: 16 },
  footer: { paddingBottom: 100 },
  downloadBtn: { backgroundColor: '#5C61F4', padding: 18, borderRadius: 16, alignItems: 'center' },
  downloadText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});