import NavBar from "@/components/NavBar";
import "../global.css";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <>
      <Slot />
      <NavBar/>
    </>
  );
}
