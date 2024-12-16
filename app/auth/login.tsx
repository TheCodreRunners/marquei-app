import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '@/components/ui/button';
import { router } from 'expo-router';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleLogin = () => {
    if (!password) {
      setErrorMessage('Senha obrigatória');
    } else {
      router.push('/(tabs)/search')
      Alert.alert('Logando...', `E-mail: ${email}`);
    }
  };

  return (
    <SafeAreaView style={{
      backgroundColor:""
    }} className="flex  px-4 h-full  items-center">
      <View className="flex-row mr-2 mb-30 mt-14 items-center">
        <Image source={require('../../assets/images/marquei_logo.png')} className="z-0 ml-4 mt-10" resizeMode='contain'></Image>
      </View>
      
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        className="w-full border border-teal-500 justify-center rounded-full px-15 p-3 mt-40 mb-3 "
      />
      <View className='w-full '> 
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          className=" w-full border justify-center border-teal-500 rounded-full px-15 mt-1 p-3 mb-3"
        />
        
        <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2">
            <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={24} color="gray"/>
          </TouchableOpacity>
        </View>
        {errorMessage ? <Text className="text-red-500 text-sm mb-2 p-3">{errorMessage}</Text> : null}

        <Button  onPress={handleLogin} className=" w-full bg-teal-500 border px-9 mt-1 rounded-full justify-center items-center mb-3">
          <Text className="text-white text-lg font-bold px-10 ">Acessar</Text>
        </Button>
        <Button onPress={() => Alert.alert('Criar Conta')} className= "w-full bg-teal-500 mt-1 border border-teal-500 px-9 rounded-full justify-center items-center mb-3">
          <Text className="text-white text-lg  px-10  font-bold">Criar Conta</Text>
        </Button>
        <View className="flex-row justify-around w-40 rounded-full mt-7 mb-2">
          <FontAwesome name="google" size={24} color="#4285F4" />
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </View>
      
    </SafeAreaView>
  );
};

export default LoginScreen;