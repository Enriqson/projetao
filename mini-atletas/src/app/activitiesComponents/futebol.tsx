import { Link } from "expo-router";
import { View, Text, Dimensions, TouchableOpacity, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Circle, Svg } from "react-native-svg";
//import Header from '../activities'

export default function Page() {
  return (
    <View className="flex flex-1">
      <Text>FUTEBOL</Text>
      <Header />
      <Footer />
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, height: 56 }}>
        <Link href="/">
        </Link>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2859C5' }}>
          Minhas Atividades
        </Text>
        <Link href="/">
        </Link>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{
      position: 'absolute',
      bottom: bottom + 30,
      width: Dimensions.get('window').width,
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      <View style={{
        backgroundColor: '#2859C5',
        borderRadius: 100,
        width: Dimensions.get('window').width * 0.8, // Same width as the white view
        height: 70, // Same height as the white view (adjust as needed)
        position: 'absolute',
        zIndex: 1,
        marginTop: 10,
      }} />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
        width: Dimensions.get('window').width * 0.8, // 80% of screen width
        height: 70, // Adjust as needed
        zIndex: 2,
        borderColor: '#2859C5', // Blue border
        borderWidth: 2, // Border width
      }}>
        <TouchableOpacity onPress={() => Linking.openURL('/')}>
          <Svg height="50" width="50">
            <Circle cx="25" cy="25" r="25" fill="pink" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('/')}>
          <Svg height="50" width="50">
            <Circle cx="25" cy="25" r="25" fill="blue" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('/')}>
          <Svg height="50" width="50">
            <Circle cx="25" cy="25" r="25" fill="green" />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}