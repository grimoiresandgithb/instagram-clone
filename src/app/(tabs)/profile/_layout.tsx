import { Stack } from "expo-router";

export default function ProfileStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Profile main screen */}
      <Stack.Screen name="index" />

      {/* Nested tabs (posts / reels / tagged) */}
      <Stack.Screen name="tabs" />

      {/* Other profile screens */}
      <Stack.Screen name="edit-profile" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}
