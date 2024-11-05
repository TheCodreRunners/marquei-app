import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!password) {
      setErrorMessage('Senha obrigatoria');
    } else {
      setErrorMessage('');
      Alert.alert('Logando...', `E-mail: ${email}`);
    }
  };

  return (
    <SafeAreaView className="flex w-full justify-center items-center">
      {/* <Image source={require('./assets/marquei-logo.png')} className="w-36 h-24 mb-8" resizeMode="contain" /> */}
      <View className="flex-row justify-center items-center mb-6 ml-6">
        <Image source={require('../../assets/images/marqueiLogo.png')} className="w-36 h-24 mb-8" resizeMode='contain'></Image>
        <Text className="text-3xl  font-bold">Marquei</Text>
      </View>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        className="w-64 border border-teal-500 rounded-full px-15 p-2 mb-3"
      />
      <View>
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          className=" border border-teal-500 rounded-full px-15 p-2 w-64 mb-3"
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2">
          <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {errorMessage ? <Text className="text-red-500 text-sm mb-2 p-2">{errorMessage}</Text> : null}

      <TouchableOpacity onPress={handleLogin} className="w-[16rem] bg-teal-500 border border-teal-500 px-9  rounded-full justify-center items-center mb-3">
        <Text className="text-white text-lg font-bold px-10 mb-2">Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Criar Conta')} className="bg-teal-500 border border-teal-500 px-9 rounded-full justify-center items-center mb-3">
        <Text className="text-white text-lg  px-10 mb-2 font-bold">Criar Conta</Text>
      </TouchableOpacity>
      <View className="flex-row justify-around w-40 rounded-full mt-7 mb-2">
        <FontAwesome name="google" size={24} color="#4285F4" />
        <FontAwesome name="facebook" size={24} color="#3b5998" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;