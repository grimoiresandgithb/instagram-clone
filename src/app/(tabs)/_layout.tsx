import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",

        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "index":
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );

            case "search":
              return (
                <Ionicons
                  name={focused ? "search" : "search-outline"}
                  size={size}
                  color={color}
                />
              );

            case "reels":
              return (
                <Ionicons
                  name={focused ? "play-circle" : "play-circle-outline"}
                  size={size}
                  color={color}
                />
              );

            case "profile":
              return (
                <Image
                  source={{ uri: "https://i.pravatar.cc/300" }}
                  style={{
                    width: focused ? 28 : 26,
                    height: focused ? 28 : 26,
                    borderRadius: 50,
                    borderWidth: focused ? 2 : 0,
                    borderColor: focused ? "black" : "transparent",
                  }}
                />
              );

            default:
              return null;
          }
        },
      })}
    />
  );
}
