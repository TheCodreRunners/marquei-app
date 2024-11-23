import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#43C7A7" />
        <ThemedText type="title" style={styles.headerTitle}>
          Meu Perfil
        </ThemedText>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }} // Replace with the user's profile image
          style={styles.profileImage}
        />
      </View>

      {/* Profile Info Section */}
      <View style={styles.infoSection}>
        {profileFields.map(({ label, value }, index) => (
          <View key={index} style={styles.infoRow}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              {label}
            </ThemedText>
            <View style={styles.rowContent}>
              <ThemedText type="default" style={styles.value}>
                {value}
              </ThemedText>
              <ThemedText type="link" style={styles.editButton}>
                Edit.
              </ThemedText>
            </View>
          </View>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <ThemedView style={[styles.button, styles.scheduleButton]}>
          <ThemedText style={styles.buttonText}>Agendar</ThemedText>
        </ThemedView>
        <ThemedView style={[styles.button, styles.cancelButton]}>
          <ThemedText style={styles.buttonText}>Cancelar</ThemedText>
        </ThemedView>
      </View>
    </ThemedView>
  );
}

const profileFields = [
  { label: 'Nome', value: 'John Lennon Andrade de Souza' },
  { label: 'E-mail', value: 'johnlennonandrade@gmail.com' },
  { label: 'Telefone', value: '(53) 99130-7005' },
  { label: 'Endereço', value: 'Rua: Clovis Bevilacqua 461' },
  { label: 'Histórico', value: 'Histórico de consultas' },
  { label: 'Prontuário', value: 'Histórico do paciente' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#43C7A7',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  infoSection: {
    flex: 1,
    marginVertical: 16,
  },
  infoRow: {
    flexDirection: 'column',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  label: {
    color: '#43C7A7',
    fontSize: 14,
    marginBottom: 4,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    color: '#333333',
  },
  editButton: {
    fontSize: 14,
    color: '#43C7A7',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  scheduleButton: {
    backgroundColor: '#43C7A7',
  },
  cancelButton: {
    backgroundColor: '#E74C3C',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
