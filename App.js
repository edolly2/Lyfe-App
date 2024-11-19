import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider, createTheme, Text } from "@rneui/themed";
import { Dimensions } from "react-native";
import Login from "./components/Login";

const { width, height } = Dimensions.get("window");
const screenSize = `${width}x${height}`;
alert(screenSize);

const theme = createTheme({
  lightColors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
  darkColors: {
    primary: "#ffc107",
    secondary: "#f8f9fa",
  },
  mode: "light",
  components: {
    Text: {
      h1Style: {
        fontSize: 48,
        color: "black",
      },
      h2Style: {
        fontSize: 24,
        color: "black",
      },
    },
    Button: {
      containerStyle: {
        margin: 6,
      },
      buttonStyle: {
        borderRadius: 10,
      },
      titleStyle: {
        fontSize: 18,
      },
    },
  },
});

export default function App() {
  return (
    <SafeAreaView style={{ alignItems: "center", paddingTop: 50 }}>
      <ThemeProvider theme={theme}>
        <Text h1>LYFE</Text>
        <Text h2>Simplify Your Day, Enjoy Your Time</Text>
        <Login />
      </ThemeProvider>
    </SafeAreaView>
  );
}
