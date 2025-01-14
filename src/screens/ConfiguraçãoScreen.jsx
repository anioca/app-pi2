import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Title, Card, Paragraph } from 'react-native-paper';

const Settings = () => {
  const [username, setUsername] = useState('Jane Doe');
  const [email, setEmail] = useState('jane.doe@example.com');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSaveProfile = () => {

    alert('Perfil atualizado!');
  };

  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword) {
 
      alert('Senha alterada com sucesso!');
    } else {
      alert('As senhas não coincidem!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.header}>Configurações</Title>

      <Card style={styles.section}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Atualizar Perfil</Title>
          <View style={styles.formGroup}>
            <TextInput
              label="Nome"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>
          <Button mode="contained" style={styles.buttonPrimary} onPress={handleSaveProfile}>
            Salvar Perfil
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.section}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Alterar Senha</Title>
          <View style={styles.formGroup}>
            <TextInput
              label="Senha Atual"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              label="Nova Senha"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              label="Confirmar Nova Senha"
              value={confirmNewPassword}
              onChangeText={setConfirmNewPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <Button mode="contained" style={styles.buttonPrimary} onPress={handleChangePassword}>
            Alterar Senha
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    marginBottom: 10,
  },
  buttonPrimary: {
    backgroundColor: '#a547bf',
  },
});

export default Settings;
