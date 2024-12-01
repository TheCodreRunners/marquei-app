import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';


const reservations = [
  {
    id: '1',
    doctor: 'Dr. Marcelo Freda Soares',
    clinic: 'CLÍNICA MÉDICA RODRIGUES E SO...',
    date: '18/07/2022',
    time: '09:30h',
    price: 'R$ 350,00',
    address: 'R. Barão de Santa Tecla, 583/20 Centro, Pelotas',
    phone: '(53) 3227-9669',
  },
  {
    id: '2',
    doctor: 'Dra. Rose Meri Gonçalves Terra',
    clinic: 'CLÍNICA MÉDICA ABRACE SAÚDE',
    date: '19/07/2022',
    time: '15:30h',
    price: 'R$ 150,00',
    address: 'R. Quinze de Novembro, 468 Centro, Pelotas',
    phone: '(53) 3227-9669',
  },
];

const ReservationsScreen = () => {
  return (
    <View className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-xl font-bold">Minhas Reservas</Text>
      </View>

      {/* Lista de reservas */}
      <FlatList
        data={reservations}
        renderItem={({ item }) => (
          <View className="bg-gray-100 rounded-lg mb-4 p-4 border border-gray-300">
            <Text className="text-lg font-bold">{item.doctor}</Text>
            <Text className="text-gray-500">{item.clinic}</Text>

            {/* Informações da reserva */}
            <View className="flex-row items-center mt-2">
              <Text className="mr-2">📅 {item.date}</Text>
              <Text className="ml-2">⏰ {item.time}</Text>
            </View>

            <Text className="text-green-500 font-bold mt-2">{item.price}</Text>
            <Text className="text-gray-600 mt-1">{item.address}</Text>
            <Text className="text-blue-500 mt-1">{item.phone}</Text>

            {/* Botões de ação */}
            <View className="flex-row mt-4">
              <Button
                title="Reagendar"
                color="green"
                onPress={() => console.log('Reagendar pressed')}
              />
              <Button
                title="Excluir Reserva"
                color="red"
                onPress={() => console.log('Excluir pressed')}
              />
            </View>
          </View>
        )}
        keyExtractor={(item: { id: any; }) => item.id}
      />
    </View>
  );
};

export default ReservationsScreen;