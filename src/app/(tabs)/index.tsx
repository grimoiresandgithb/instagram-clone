import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar*/}
      <View style={styles.topBar}>
        <Text style={styles.logo}>Instagram</Text>

        <View style={styles.topIcons}>
          <Ionicons name="heart-outline" size={26} style={styles.icon} />
          <Ionicons name="chatbubble-outline" size={26} style={styles.icon} />
        </View>
      </View>

      {/* Feed */}
      <ScrollView contentContainerStyle={styles.feed}>
        <Post
          username="alyssa"
          avatar="https://ipravatar.cc/150?u=alyssa"
          image="https://picsum.photos/id/3/5000/3333"
          caption="Building my Instagram clone!"
        />
        <Post
          username="sait_student"
          avatar="https://ipravatar.cc/150?u=sait"
          image="https://picsum.photos/id/13/2500/1667"
          caption="Afternoons at the beach"
        />
        <Post
          username="reactnative"
          avatar="https://i.pravatar.cc/150?u=react"
          image="https://picsum.photos/id/24/4855/1805"
          caption="Reading is FUN-damental"
        />
      </ScrollView>
    </SafeAreaView>
  );

  type PostProps = {
    username: string;
    avatar: string;
    image: string;
    caption: string;
  };

  function Post({ username, avatar, image, caption }: PostProps) {
    return (
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.postHeader}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Text style={styles.username}>{username}</Text>
        </View>

        {/* Image */}
        <Image source={{ uri: image }} style={styles.postImage} />

        {/* Footer */}
        <View style={styles.postFooter}>
          <Ionicons name="heart-outline" size={26} stye={styles.icon} />
          <Ionicons name="chatbubble-outline" size={26} style={styles.icon} />
          <Ionicons name="paper-plane-outline" size={26} style={styles.icon} />
        </View>

        <Text style={styles.caption}>
          <Text style={styles.username}>{username}</Text>
          {caption}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  topIcons: {
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    marginLeft: 10,
  },
  feed: {
    paddingBottom: 100,
  },
  post: {
    marginBottom: 30,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: "600",
  },
  postImage: {
    width: "100%",
    height: 400,
    backgroundColor: "#eee",
  },
  postFooter: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 16,
  },
  caption: {
    paddingHorizontal: 12,
    marginTop: 4,
  },
});
