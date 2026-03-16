import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'

export default function CheckoutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 20, color: '#30C973' }}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.headerRow}>
          <Text style={styles.title}>Checkout 💳</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.totalAmount}>₹ 1,527</Text>
            <Text style={styles.vatText}>Including GST (18%)</Text>
          </View>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.activeTabText}>Credit card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.inactiveTabText}>Apple Pay</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Card number</Text>
        <TextInput style={styles.input} placeholder="5261   4141   0151   8472" keyboardType="numeric" />

        <Text style={styles.label}>Cardholder name</Text>
        <TextInput style={styles.input} placeholder="Christie Doe" />

        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>Expiry date</Text>
            <TextInput style={styles.input} placeholder="06  /  2024" />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.label}>CVV / CVC</Text>
            <TextInput style={styles.input} placeholder="915" keyboardType="numeric" secureTextEntry />
          </View>
        </View>

        <Text style={styles.notice}>We will send you an order details to your email after the successfull payment</Text>

        <TouchableOpacity 
          style={styles.payBtn}
          onPress={() => navigation.navigate('Success')}
        >
          <Text style={styles.payBtnText}>🔒 Pay for the order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  backButton: { width: 40, height: 40, backgroundColor: '#F0FFF5', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  totalAmount: { fontSize: 20, fontWeight: 'bold', color: '#30C973' },
  vatText: { fontSize: 12, color: '#999' },
  tabRow: { flexDirection: 'row', marginBottom: 30, backgroundColor: '#F5F5F5', borderRadius: 16, padding: 5 },
  tab: { flex: 1, padding: 15, alignItems: 'center', borderRadius: 12 },
  activeTab: { backgroundColor: '#30C973' },
  activeTabText: { color: '#FFF', fontWeight: 'bold' },
  inactiveTabText: { color: '#666', fontWeight: 'bold' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 10, marginTop: 15 },
  input: { backgroundColor: '#F9F9F9', padding: 15, borderRadius: 12, fontSize: 16, color: '#333' },
  row: { flexDirection: 'row' },
  notice: { textAlign: 'center', color: '#999', fontSize: 12, marginTop: 40, marginBottom: 20, paddingHorizontal: 20 },
  payBtn: { backgroundColor: '#30C973', padding: 18, borderRadius: 16, alignItems: 'center' },
  payBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});