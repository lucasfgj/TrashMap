import React, {
  useRef,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CustomBottomSheet, { BottomSheetHandle } from "@/components/CustomBottomSheet";
import SearchBar from "@/components/ui/searchBar";
import CardRotas from "@/components/cardListRotas";
                

function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheetHandle | null>(null);

  const initialRegion = {
    latitude: -12.9777,
    longitude: -38.5016,
    latitudeDelta: 0.0922, // Zoom level
    longitudeDelta: 0.0421, // Zoom level
  };

  // ABRINDO NO ESTADO PADRÃO (50% da tela)
  const handlePresentSheet = () => {
    bottomSheetRef.current?.openDefault();
  };
  // CHAMA A FUNÇÃO `close()` para fechar completamente (0%)
  const handleCloseSheet = () => {
    bottomSheetRef.current?.close();
  };
  // CHAMA A FUNÇÃO `openFull()` para ir para 85%
  const handleOpenFull = () => {
    bottomSheetRef.current?.openFull();
  };

  return (
    <View style={appStyles.container}>
      <View style={appStyles.mapPlaceholder}>
        <MapView
          style={appStyles.map} // Estilo flex: 1 para ocupar o espaço
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation={true}
          showsMyLocationButton={false} // Você pode habilitar se quiser (true)
          // mapPadding={{ bottom: moderateScale(110) }} // Adiciona padding para botões sobre o mapa
        >
          {/* Exemplo de Marcador */}
          {/* <Marker coordinate={{ latitude: -12.9777, longitude: -38.5016 }} title="Exemplo" /> */}
          {/* No futuro, buscará os pontos da API e fará um map aqui */}
        </MapView>
      </View>
      <CustomBottomSheet ref={bottomSheetRef}>
        <View style={appStyles.contentContainer}>
          <View style={appStyles.viewPesquisa}>
            <SearchBar
              onChangeText={() => {
                /* lógica para atualizar o estado de pesquisa */
              }}
              value={"" /* estado de pesquisa atual */}
            />
          </View>
          <View style={appStyles.viewRotas}>
            <CardRotas />
          </View>
        </View>
      </CustomBottomSheet>
    </View>
  );
}

// Estilos para o App (HomeScreen original)
const appStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f0f0" },
  
  mapPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
  },
  map: {
    flex: 1, // Faz o mapa ocupar todo o espaço disponível
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1E603A",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1E603A",
  },
  sheetText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#000000ff",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 10,
    gap: 45,
  },
  viewPesquisa: {
    width: "100%",
  },

  viewRotas: {
    width: "100%",
    flex: 1,
    marginTop: 10,
  },
});

export default HomeScreen;
