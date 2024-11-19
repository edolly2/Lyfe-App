import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  Switch,
  Pressable,
  Alert,
  Text,
} from "react-native";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
          rightIcon={<Icon name="eye-outline" size={24} color="gray" />}
        />
      </View>

      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{ true: "green", false: "gray" }}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>

        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Login Succesfull!")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>

      <View style={styles.mediaIcons}>
        <Icon name="logo-google" size={36} color="gray" />
        <Icon name="logo-instagram" size={36} color="gray" />
        <Icon name="logo-facebook" size={36} color="gray" />
      </View>

      <Text style={styles.footerText}>
        Don't Have Account?<Text style={styles.signupText}> Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "green",
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  rememberView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotText: {
    fontSize: 11,
    color: "green",
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "green",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
  },
  signupText: {
    fontSize: 13,
    color: "green",
  },
});
