import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '@/components/ui/button';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!password) {
      setErrorMessage('Senha obrigatória');
    } else {
      setErrorMessage('');
      Alert.alert('Logando...', `E-mail: ${email}`);
    }
  };

  return (
    <SafeAreaView style={{
      backgroundColor:""
    }} className="flex px-4 mr-5 ml-0 h-full justify-center items-center">
      <View className="flex-row justify-around items-center">
        <Image source={require('../../assets/images/marqueiLogo.png')} className="z-0 ml-4 mb-8" resizeMode='contain'></Image>
        <Text className="z-50 text-6xl ml-0 mr-14 mb-10 text-black text-center font-bold">Marquei</Text>
      </View>
      
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        className="w-full border border-teal-500 rounded-full px-15 p-2 mt-0 mb-3"
      />
      <View className='w-full'> 
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          className=" w-full border  border-teal-500 rounded-full px-15 p-2 mb-3"
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2">
          <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {errorMessage ? <Text className="text-red-500 text-sm mb-2 p-2">{errorMessage}</Text> : null}

      <Button  onPress={handleLogin} className=" w-full bg-teal-500 border px-9  rounded-full justify-center items-center mb-3">
        <Text className="text-white text-lg font-bold px-10 ">Acessar</Text>
      </Button>
      <Button onPress={() => Alert.alert('Criar Conta')} className= "w-full bg-teal-500 border border-teal-500 px-9 rounded-full justify-center items-center mb-3">
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