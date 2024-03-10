import NavBar from "@/components/NavBar";
import "../global.css";
import { Stack } from "expo-router";
import { TAILWIND_THEME } from "../utils/index";
import { default as ConfigSvg } from "@/components/svgs/misc/config";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerTintColor: TAILWIND_THEME.colors.blue,
          headerTitleAlign: "center",
          headerRight: (props) => <ConfigSvg style={{ marginRight: "16px" }} />,
        }}
      >
        <Stack.Screen name="avatar" options={{ headerTitle: "Avatar" }} />
        <Stack.Screen
          name="achievements"
          options={{ headerTitle: "Minhas Conquistas" }}
        />
        <Stack.Screen name="profile" options={{ headerTitle: "Meu Perfil" }} />
        <Stack.Screen
          name="index"
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="activities"
          options={{ headerTitle: "Minhas Atividades" }}
        />
        <Stack.Screen
          name="activity_details"
          options={{ headerShown: false }}
      />
        <Stack.Screen
          name="date"
          options={{ headerTitle: "Minhas Datas" }}
        /> 
      </Stack>
      <NavBar />
    </>
  );
}
