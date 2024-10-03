import { Icons } from "@/constants/Icons";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export class AuthLayout extends Component {
  state = {
    selectedTab: "username",
    username: "",
    mobile: "",
    password: "",
    otp: "",
    isRememberMe: false,
    isOTPSent: false,
  };

  setSelectedTab = (tab: "username" | "mobile") => {
    this.setState({
      selectedTab: tab,
      username: "",
      mobile: "",
      password: "",
      otp: "",
      isRememberMe: false,
      isOTPSent: false,
    });
  };

  signUp = () => {
    // Add logic to sign up here
    console.log("Sign Up");
  };

  requestOTP = () => {
    // Add logic to request OTP here
    this.setState({ isOTPSent: true });
  };

  resendOTP = () => {
    // Add logic to resend OTP here
    console.log("OTP resent");
  };

  forgotPassword = () => {
    // Add logic to resend OTP here
    console.log("Forgot Password");
  };

  goggleSignIn = () => {
    // Add logic to goggle sign in here
    console.log("Goggle Sign In");
  }

  appleSignIn = () => {
    // Add logic to apple sign in here
    console.log("Apple Sign In");
  }

  render() {
    return (
      <View className="bg-primary-background flex-1">
        <StatusBar />
        <SafeAreaView>
          <View>
            <View className="rounded-3xl bg-tertiary min-h-full mx-6 mt-16" />
            <View className="absolute top-20 right-0 left-0 bg-white h-full w-full rounded-t-3xl items-center">
              <Image
                source={Icons.logo}
                className="w-24 h-24 rounded-full align-middle mt-4"
              />
              <View className="relative w-full px-4 my-4 flex-1">
                <Text className="text-lg font-bold text-primary">
                {
                    this.state.isOTPSent
                      ? "OTP"
                      : "Welcome Back!"
                  }
                </Text>
                <Text className="mb-1 text-icon-colors">
                {
                    this.state.isOTPSent
                      ? "We have sent the OTP to your Mobile Number"
                      : "Unlock Focused, Distraction-free Learning"
                  }
                  
                </Text>
                <Text className={`mb-4 font-bold ${this.state.isOTPSent ? "text-white":"text-icon-colors"}`}>Login now</Text>


                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginBottom: 16,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.setSelectedTab("username")}
                    className={`p-2 flex-1 justify-center items-center ${
                      this.state.selectedTab === "username"
                        ? "bg-primary-background rounded-lg"
                        : ""
                    }`}
                  >
                    <Text
                      className={`p-2 font-bold ${
                        this.state.selectedTab === "username"
                          ? "text-white"
                          : "text-primary-background"
                      }`}
                    >
                      Username
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setSelectedTab("mobile")}
                    className={`p-2 flex-1 justify-center items-center ${
                      this.state.selectedTab === "mobile"
                        ? "bg-primary-background rounded-lg"
                        : ""
                    }`}
                  >
                    <Text
                      className={`p-2 font-bold ${
                        this.state.selectedTab === "mobile"
                          ? "text-white"
                          : "text-primary-background"
                      }`}
                    >
                      Mobile No
                    </Text>
                  </TouchableOpacity>
                </View>

                {this.state.selectedTab === "username" ? (
                  <>
                    <TextInput
                      placeholder="Enter Username"
                      value={this.state.username}
                      onChangeText={(text) => this.setState({ username: text })}
                      className="shadow-2xl rounded-lg p-2 mb-4"
                    />
                    <TextInput
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChangeText={(text) => this.setState({ password: text })}
                      secureTextEntry={true}
                      className="shadow rounded-md p-2 mb-4"
                    />
                    <View
                      style={{ flexDirection: "row" }}
                      className="justify-between"
                    >
                      {/*<CheckBox
                        value={this.state.isRememberMe}
                        onValueChange={(newValue) => this.setState({ isRememberMe: newValue })}
                      />*/}
                      <Text className="text-icon-colors">Remember Me</Text>
                      <TouchableOpacity
                        onPress={this.forgotPassword}
                      >
                      <Text className="underline text-icon-colors">
                        Forgot Password?
                      </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      className="bg-primary p-4 rounded-xl mt-8 justify-center items-center"
                      onPress={() => router.push('/(tabs)/home')}
                    >
                      <Text className="text-white text-xl font-bold">Login</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TextInput
                      placeholder="Enter Mobile No"
                      value={this.state.mobile}
                      onChangeText={(text) => this.setState({ mobile: text })}
                      className="border rounded-md p-2 mb-4"
                      keyboardType="numeric"
                    />
                    {!this.state.isOTPSent ? (
                      <TouchableOpacity
                        onPress={this.requestOTP}
                        className="bg-primary p-4 rounded-xl mt-2 justify-center items-center"
                      >
                        <Text className="text-white text-xl font-bold">Request OTP</Text>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TextInput
                          placeholder="Enter OTP"
                          value={this.state.otp}
                          onChangeText={(text) => this.setState({ otp: text })}
                          className="border rounded-md p-2 mb-4"
                          keyboardType="numeric"
                        />
                        <TouchableOpacity
                          onPress={this.resendOTP}
                          className="p-2 self-end"
                        >
                          <Text>Didn't receive OTP?<Text className="text-primary-background"> Resend</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          className="bg-primary p-4 rounded-xl mt-8 justify-center items-center"
                          onPress={() => console.log("Login with OTP")}
                        >
                          <Text className="text-white text-xl font-bold">Login</Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </>
                )}
                <Text className="my-3 text-center text-primary">
                  or continue with
                </Text>
                <View className="flex-row gap-4">
                  <TouchableOpacity className="flex-row items-center justify-center border rounded-lg p-2 border-primary flex-1"
                    onPress={this.goggleSignIn}
                  >
                    <Image source={Icons.google} className="w-6 h-6" />
                    <Text className="text-[#333333] ml-1">Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-row items-center justify-center border rounded-lg p-2 border-primary flex-1"
                    onPress={this.appleSignIn}
                  >
                    <Image source={Icons.apple} className="w-6 h-6" />
                    <Text className="text-[#333333] ml-1">Apple</Text>
                  </TouchableOpacity>
                </View>
                <Text className="absolute bottom-2 left-0 right-0 text-center justify-self-end">
                  Dont have an account?
                  <TouchableOpacity onPress={this.signUp}>
                    <Text className="text-primary-background">Sign up</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default AuthLayout;
