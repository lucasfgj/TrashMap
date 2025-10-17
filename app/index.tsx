import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "./screens/home";


const Stack = createStackNavigator();
const profileImageUrl = "https://i.pravatar.cc/150?u=a042581f4e29026704d";

const styles = StyleSheet.create({
  headerTextTop: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerTextBottom: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: { backgroundColor: "#1E603A", height: 140 },
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.headerTextTop}>Olá, Leticia</Text>
              <Text style={styles.headerTextBottom}>Combata a Poluição</Text>
            </View>
          ),
          headerRight: () => [
            <Ionicons
              key="notifications"
              name="notifications-outline"
              size={30}
              color="#000"
              style={{ marginRight: 15 }}
              onPress={() => Alert.alert("Barra de Notificação!!")}
            />,

            <TouchableOpacity
              key="profile"
              onPress={() => Alert.alert("Perfil do Usuario!!")}
              style={{ marginRight: 15 }}
            >
              <Image
                source={{ uri: profileImageUrl }}
                style={{
                  width: 57,
                  height: 57,
                  borderRadius: 27,
                  borderWidth: 1,
                  borderColor: "#ddd",
                }}
              />
            </TouchableOpacity>,
          ],
        })}
      />
    </Stack.Navigator>
      </GestureHandlerRootView>
  );
}
