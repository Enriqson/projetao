import React from "react";
import { TouchableOpacity  } from "react-native";
import { default as ConfigSvg } from "@/components/svgs/misc/config";
import { useAuth } from "@/providers/AuthProvider";

export default function SignOutButton() {
  const { signOut } = useAuth();

  return (
    <TouchableOpacity  onPress={() => signOut()}>
      <ConfigSvg style={{ marginRight: "16px" }} />
    </TouchableOpacity >
  );
}
