import {StatusBar} from "expo-status-bar";
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";

import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoad] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_700Bold,
  });

  if (!fontsLoad) {
    return <AppLoading />;
  }

  const socials = [
    {
      img: require("./assets/img/003-pin.png"),
      title: "San Francisco",
    },
    {
      img: require("./assets/img/002-url.png"),
      title: "https://github.blog",
    },
    {
      img: require("./assets/img/004-twitter.png"),
    },
    {
      img: require("./assets/img/001-office-building.png"),
      title: "@github",
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={[styles.wraper]}>
          <View style={[styles.header, styles.sectionPadding]}>
            <Image
              source={require("./assets/img/Oval.png")}
              height={100}
              width={100}
            />
            <View>
              <Text style={styles.fontTitle}>The Octocat</Text>
              <Text style={styles.fontUn}>@octocat</Text>
              <Text style={styles.fontDescription}>Joined 25 Jan 2011</Text>
            </View>
          </View>
          <View style={[styles.sectionPadding]}>
            <Text style={styles.fontDescription}>
              Lorem ipsum dolor sit amet, consectetur cg elit. Atque amet
              dolores, quaerat rem, numquam nobis fugiat.
            </Text>
          </View>
          <View style={[styles.sectionPadding]}>
            <View style={[styles.stats, styles.sectionPadding]}>
              <View style={styles.statItem}>
                <Text
                  style={[
                    styles.fontDescription,
                    {fontSize: 12, marginBottom: 10},
                  ]}>
                  Repos
                </Text>
                <Text style={[styles.fontTitle]}>8</Text>
              </View>
              <View style={styles.statItem}>
                <Text
                  style={[
                    styles.fontDescription,
                    {fontSize: 12, marginBottom: 10},
                  ]}>
                  Followers
                </Text>
                <Text style={[styles.fontTitle]}>3938</Text>
              </View>
              <View style={styles.statItem}>
                <Text
                  style={[
                    styles.fontDescription,
                    {fontSize: 12, marginBottom: 10},
                  ]}>
                  Following
                </Text>
                <Text style={[styles.fontTitle]}>9</Text>
              </View>
            </View>
          </View>
          <View style={[styles.sectionPadding]}>
            {socials.map((item, i) => (
              <View style={styles.socialItem} key={i}>
                <Image
                  style={{opacity: !item?.title && 0.4}}
                  source={item.img}
                  height={30}
                  width={30}
                />
                <Text
                  style={[
                    styles.fontDescription,
                    {
                      marginStart: 20,
                      color: item?.title ? "#617DA7" : "#617da78c",
                    },
                  ]}>
                  {item?.title ? item.title : "Not Available"}
                </Text>
              </View>
            ))}
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FE",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  wraper: {
    backgroundColor: "#FEFEFE",
    borderRadius: 15,
  },
  sectionPadding: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  stats: {
    backgroundColor: "#F6F8FF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
  },
  socialItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  fontTitle: {
    color: "#2B3442",
    fontFamily: "RobotoMono_700Bold",
    fontSize: 16,
  },
  fontUn: {
    color: "#2479FF",
    fontFamily: "RobotoMono_500Medium",
    fontSize: 14,
    marginBottom: 4,
  },
  fontDescription: {
    color: "#617DA7",
    fontFamily: "RobotoMono_400Regular",
    fontSize: 14,
  },
});
