import React from "react";
import { TouchableOpacity } from "react-native";
import { default as ConfigSvg } from "@/components/svgs/misc/config";
import { useAuth } from "@/providers/AuthProvider";
import Exit from "@/components/svgs/misc/exit";

export default function SignOutButton() {
  const { signOut } = useAuth();

  return (
    <TouchableOpacity onPress={() => signOut()}>
      <Exit style={{ marginRight: "16px" }} />
    </TouchableOpacity >
  );
}
