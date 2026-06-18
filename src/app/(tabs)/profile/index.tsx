import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<"posts" | "reels" | "tagged">(
    "posts",
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://i.pravatar.cc/200?u=alyssa" }}
            style={styles.avatar}
          />

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>340</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>280</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bio}>
          <Text style={styles.name}>Alyssa</Text>
          <Text style={styles.bioText}>
            Software dev student • Book lover • Tea enthusiast
          </Text>
        </View>

        {/* Edit Profile */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Highlights */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.highlights}
        >
          <Highlight title="Travel" />
          <Highlight title="Books" />
          <Highlight title="Dev" />
          <Highlight title="Life" />
        </ScrollView>

        {/* Fake Tabs */}
        <View style={styles.tabsRow}>
          <TabButton
            icon="grid-outline"
            active={activeTab === "posts"}
            onPress={() => setActiveTab("posts")}
          />
          <TabButton
            icon="play-circle-outline"
            active={activeTab === "reels"}
            onPress={() => setActiveTab("reels")}
          />
          <TabButton
            icon="person-circle-outline"
            active={activeTab === "tagged"}
            onPress={() => setActiveTab("tagged")}
          />
        </View>

        {/* Content */}
        {activeTab === "posts" && <PostsGrid />}
        {activeTab === "reels" && (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Reels coming soon…</Text>
          </View>
        )}
        {activeTab === "tagged" && (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>No tagged posts yet</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function TabButton({
  icon,
  active,
  onPress,
}: {
  icon: any;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabButton}>
      <Ionicons
        name={icon}
        size={26}
        color={active ? "black" : "gray"}
        style={{ opacity: active ? 1 : 0.5 }}
      />
    </TouchableOpacity>
  );
}

function PostsGrid() {
  return (
    <View style={styles.grid}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Image
          key={i}
          source={{ uri: `https://picsum.photos/300/300?random=${i}` }}
          style={styles.gridImage}
        />
      ))}
    </View>
  );
}

type HighlightProps = { title: string };

function Highlight({ title }: HighlightProps) {
  return (
    <View style={styles.highlight}>
      <View style={styles.highlightCircle}>
        <Image
          source={{ uri: "https://picsum.photos/100" }}
          style={styles.highlightImage}
        />
      </View>
      <Text style={styles.highlightLabel}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },

  header: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 10,
    alignItems: "center",
  },

  avatar: { width: 90, height: 90, borderRadius: 45 },

  statsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },

  stat: { alignItems: "center" },
  statNumber: { fontSize: 20, fontWeight: "700" },
  statLabel: { fontSize: 14, color: "#555" },

  bio: { paddingHorizontal: 16, paddingVertical: 10 },
  name: { fontWeight: "700", fontSize: 16 },
  bioText: { marginTop: 4, fontSize: 14 },

  editButton: {
    marginHorizontal: 16,
    marginTop: 6,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  editButtonText: { fontWeight: "600" },

  highlights: { paddingVertical: 14, paddingLeft: 16 },

  highlight: { marginRight: 18, alignItems: "center" },
  highlightCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  highlightImage: { width: 64, height: 64, borderRadius: 32 },
  highlightLabel: { marginTop: 6, fontSize: 12 },

  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
  },

  tabButton: { padding: 6 },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridImage: {
    width: "33.33%",
    height: 130,
  },

  placeholder: {
    padding: 40,
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#555",
  },
});
