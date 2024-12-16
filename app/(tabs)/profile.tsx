import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller, FieldValues } from 'react-hook-form';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Define os tipos do formulário
interface ProfileForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  history: string;
  record: string;
}

export default function ProfileScreen() {
  const { control, handleSubmit, setValue, getValues } = useForm<ProfileForm>({
    defaultValues: {
      name: 'John Lennon Andrade de Souza',
      email: 'johnlennonandrade@gmail.com',
      phone: '(53) 99130-7005',
      address: 'Rua: Clovis Bevilacqua 461',
      history: 'Histórico de consultas',
      record: 'Histórico do paciente',
    },
  });

  const [editingField, setEditingField] = useState<keyof ProfileForm | null>(null);

  const onSave = (data: ProfileForm) => {
    console.log('Updated Profile Data:', data);
    setEditingField(null); // Fecha o modo de edição
  };

  const profileFields = [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: 'phone', label: 'Telefone' },
    { key: 'address', label: 'Endereço' },
    { key: 'history', label: 'Histórico' },
    { key: 'record', label: 'Prontuário' },
  ] as const;

  return (
    <ThemedView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#43C7A7" />
        <ThemedText type="title" style={styles.headerTitle}>
          Meu Perfil
        </ThemedText>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }} // Imagem do perfil do usuário
          style={styles.profileImage}
        />
      </View>

      {/* Profile Info Section */}
      <View style={styles.infoSection}>
        {profileFields.map(({ key, label }) => (
          <View key={key} style={styles.infoRow}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              {label}
            </ThemedText>
            <View style={styles.rowContent}>
              {/* Input ou valor */}
              {editingField === key ? (
                <Controller
                  control={control}
                  name={key}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      style={styles.input}
                      value={value}
                      onChangeText={onChange}
                      autoFocus
                      onBlur={() => setEditingField(null)} // Fecha o campo ao perder o foco
                    />
                  )}
                />
              ) : (
                <ThemedText type="default" style={styles.value}>
                  {getValues(key)}
                </ThemedText>
              )}
              {/* Botão de Editar/Salvar */}
              <TouchableOpacity
                onPress={() => {
                  if (editingField === key) {
                    handleSubmit(onSave)(); // Salva os dados
                  } else {
                    setEditingField(key); // Entra no modo de edição
                  }
                }}
              >
                <ThemedText type="link" style={styles.editButton}>
                  {editingField === key ? 'Save' : 'Edit.'}
                </ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Botões Agendar/Cancelar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.scheduleButton]}>
          <ThemedText style={styles.buttonText}>Salvar</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <ThemedText style={styles.buttonText}>Cancelar</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

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
  input: {
    borderBottomWidth: 1,
    borderColor: '#43C7A7',
    fontSize: 16,
    color: '#333333',
    flex: 1,
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
