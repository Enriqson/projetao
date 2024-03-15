import NavBar from "@/components/NavBar";
import { Stack, Redirect } from "expo-router";
import { TAILWIND_THEME } from "@/utils";
import { useAuth } from "@/providers/AuthProvider";
import SignOutButton from "@/components/SignOutButton";

export default function Layout() {
  const { session } = useAuth();

  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerTintColor: TAILWIND_THEME.colors.blue,
          headerTitleAlign: "center",
          headerRight: (props) => <SignOutButton />,
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
          name="adventureWeek"
          options={{ headerTitle: "Minhas Aventuras" }}
        />
        <Stack.Screen
          name="activity_details"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="achievement_details"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="date"
          options={{ headerTitle: "Minhas Datas" }}
        />
        <Stack.Screen
          name="pairedProfile"
          options={{ headerTitle: "Perfil Pareado" }}
        />
      </Stack>
      <NavBar />
    </>
  );
}
