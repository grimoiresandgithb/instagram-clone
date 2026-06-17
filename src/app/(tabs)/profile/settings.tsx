import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>

      <Link href="/(tabs)/profile/edit-profile" style={styles.link}>
        Edit Profile
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { fontSize: 22, fontWeight: "600", textAlign: "center" },
  link: { marginTop: 20, fontSize: 18, color: "blue" },
});
