import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>

      <Link href="/(tabs)/profile/settings" style={styles.link}>
        Go to Settings
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { fontSize: 22, fontWeight: "600", textAlign: "center" },
  link: { marginTop: 20, fontSize: 18, color: "blue" },
});
