import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { supabase } from "@/config/supabase";
import { router } from "expo-router";

import {
  Layout,
  Text,
  TextInput,
  Button,
  themeColor,
} from "react-native-rapi-ui";

export default function () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function login() {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.replace("/");
    } catch (err) {
      throw err;
    } finally {
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  }
  return (
    <KeyboardAvoidingView className="lg:w-1/4  lg:self-center " behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: themeColor.white100,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require("../../assets/login.png")}
            />
          </View>
          <View
          className="px-[20px] pb-[20px] bg-white grow-[3]"
          >
            <Text
              fontWeight="bold"
              style={{
                alignSelf: "center",
                padding: 30,
              }}
              size="h3"
            >
              Login
            </Text>
            <Text>Email</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Digite o email"
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={{ marginTop: 15 }}>Senha</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Digite a senha"
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              text={loading ? "Loading" : "Continuar"}
              onPress={login}
              style={{
                marginTop: 20,
              }}
              disabled={loading}
            />

            <View className="flex-row items-center mt-[15px] justify-center">
              <Text size="md">Não tem uma conta?</Text>
              <TouchableOpacity
                onPress={() => {
                  router.replace("/");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  Registre-se aqui
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center mt-[10px] justify-center">
              <TouchableOpacity
                onPress={() => {
                  router.replace("/");
                }}
              >
                <Text size="md" fontWeight="bold">
                  Esqueci a senha
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}
