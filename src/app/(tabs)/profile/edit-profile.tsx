import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function EditProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Edit Profile Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { fontSize: 22, fontWeight: "600", textAlign: "center" },
});
