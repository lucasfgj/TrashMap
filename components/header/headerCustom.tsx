import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

type CustomHeaderProps = {
  Header: string;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ Header }) => {
  // Ajuste de altura para a barra de status em iOS e Android
  const headerHeight = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;
  
  return (
    <View style={[styles.header, { paddingTop: headerHeight + 10 }]}>
      <Text style={styles.title}>{Header}</Text>
      {/* Você pode adicionar ícones de Menu ou Voltar aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90, // Altura total (pode variar)
    backgroundColor: '#6200EE', // Cor primária da sua app
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    // Note: Usamos paddingTop dinâmico no componente para acomodar a barra de status
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;