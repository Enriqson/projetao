import NavBar from "@/components/NavBar";
import { Stack } from "expo-router";
import { TAILWIND_THEME } from "@/utils/index";
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
        <Stack.Screen
          name="[achievement]"
          options={{ headerTitle: "Sobre conquista" }}
        />
      </Stack>
      <NavBar />
    </>
  );
}
