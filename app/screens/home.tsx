
import React, { useRef, useMemo } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";


function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["15%", "50%"], []);
  const handlePresentSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
    console.log(
      "Botão pressionado! Ref é:",
      bottomSheetRef.current ? "válida" : "nula"
    );
  };
  return (
    <view style={styles.container}>
      
        
      <View style={styles.mapPlaceholder}>
        <Text style={styles.title}>Bem-vindo à Home! 🌎</Text>
        <Text style={styles.subtitle}>O mapa aparecerá aqui!</Text>

        <TouchableOpacity style={styles.button} onPress={handlePresentSheet}>
          <Text style={styles.buttonText}>Abrir Detalhes da Área</Text>
        </TouchableOpacity>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={0} // Estado inicial: no primeiro ponto de parada ('15%')
        snapPoints={snapPoints}
        enablePanDownToClose={true} // Permite fechar arrastando para baixo
        // Estilos para customizar o visual
        handleIndicatorStyle={styles.handleIndicator}
        backgroundStyle={styles.bottomSheetBackground}
      >
        {/* 4. Conteúdo dentro da Bottom Sheet */}
        <View style={styles.contentContainer}>
          <Text style={styles.sheetTitle}>Análise da Qualidade do Ar</Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Nível de Poluição: Médio ⚠️</Text>
            <Text style={styles.infoText}>
              Sugestão: Evitar exercícios ao ar livre.
            </Text>
          </View>

          <Button
            title="Ver Rotas Alternativas"
            onPress={() => console.log("Navegar para Rotas")}
          />

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => bottomSheetRef.current?.close()}
          >
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  mapPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200, // Garante que o botão não fique escondido pela prévia da folha
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

  // --- Estilos da Bottom Sheet ---
  bottomSheetBackground: {
    backgroundColor: "#FFFFFF", // Fundo branco da bandeja
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  handleIndicator: {
    backgroundColor: "#ccc", // Cor da alça superior
    width: 40,
    height: 5,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1E603A",
  },
  infoBox: {
    backgroundColor: "#FFFBEA", // Fundo levemente amarelado para alerta
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#333",
    fontWeight: "500",
  },
});

export default HomeScreen;