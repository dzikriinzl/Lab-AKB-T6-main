import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function IconScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Koleksi 10 Random Ikon</Text>
      
      {/* Container untuk tabel ikon */}
      <View style={styles.iconTable}>
        {/* Kolom Kiri */}
        <View style={styles.iconColumn}>
          <View style={styles.iconItem}>
            <Ionicons name="camera" size={50} color="#55acee" />
            <Text style={styles.iconLabel}>Kamera</Text>
            <Text style={styles.iconDescription}>Untuk mengambil gambar atau video.</Text>
          </View>
          <View style={styles.iconItem}>
            <Ionicons name="ios-paw-outline" size={50} color="#ff69b4" />
            <Text style={styles.iconLabel}>Tanya</Text>
            <Text style={styles.iconDescription}>Simbol yang menanyakan sesuatu yang belum diketahui atau hal yang tidak jelas.</Text>
          </View>
          <View style={styles.iconItem}>
            <FontAwesome name="rocket" size={50} color="#ff4500" />
            <Text style={styles.iconLabel}>Roket</Text>
            <Text style={styles.iconDescription}>Simbol untuk kecepatan atau peluncuran.</Text>
          </View>
          <View style={styles.iconItem}>
            <FontAwesome name="github" size={50} color="#24292e" />
            <Text style={styles.iconLabel}>GitHub</Text>
            <Text style={styles.iconDescription}>Representasi platform pengembangan perangkat lunak.</Text>
          </View>
          <View style={styles.iconItem}>
            <FontAwesome name="map" size={50} color="#008000" />
            <Text style={styles.iconLabel}>Peta</Text>
            <Text style={styles.iconDescription}>Digunakan untuk menunjukkan lokasi atau navigasi.</Text>
          </View>
        </View>

        {/* Kolom Kanan */}
        <View style={styles.iconColumn}>
          <View style={styles.iconItem}>
            <MaterialIcons name="settings" size={50} color="#808080" />
            <Text style={styles.iconLabel}>Pengaturan</Text>
            <Text style={styles.iconDescription}>Mengakses konfigurasi aplikasi.</Text>
          </View>
          <View style={styles.iconItem}>
            <MaterialIcons name="lightbulb" size={50} color="#ffd700" />
            <Text style={styles.iconLabel}>Bohlam</Text>
            <Text style={styles.iconDescription}>Menunjukkan ide atau pencerahan.</Text>
          </View>
          <View style={styles.iconItem}>
            <FontAwesome name="heart" size={50} color="#e63946" />
            <Text style={styles.iconLabel}>Hati</Text>
            <Text style={styles.iconDescription}>Digunakan untuk "suka" atau favorit.</Text>
          </View>
          <View style={styles.iconItem}>
            <Ionicons name="airplane" size={50} color="#1e90ff" />
            <Text style={styles.iconLabel}>Pesawat</Text>
            <Text style={styles.iconDescription}>Menggambarkan perjalanan atau mode pesawat.</Text>
          </View>
          <View style={styles.iconItem}>
            <Ionicons name="musical-notes" size={50} color="#8a2be2" />
            <Text style={styles.iconLabel}>Musik</Text>
            <Text style={styles.iconDescription}>Mengontrol pemutaran musik.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  iconTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconColumn: {
    width: '48%', // Mengatur lebar kolom agar ada sedikit ruang di tengah
  },
  iconItem: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconLabel: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  iconDescription: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
});
