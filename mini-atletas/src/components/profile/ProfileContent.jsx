import * as React from "react";
import { Card } from "@/components/ui/card";
import Girl from "@/components/svgs/profile/girl";
import Girl2 from "@/components/svgs/profile/girl2";
import Bola from "@/components/svgs/profile/bola";
import { Text, View } from "react-native";
import Trofeu from "@/components/svgs/profile/trophy";
import Conquista from "@/components/svgs/profile/conquistas";

const ProfileContent = ({ userName }) => {
    const borderColor = "#8928C5"; // Defina a cor da borda aqui
  
    return (
      <div style={{ display: 'flex', flexDirection : 'column' ,justifyContent: 'center', alignItems: 'center'}}>
        <View >
          <View>
            <Girl2></Girl2>
          </View>
          <View style={{marginTop: '10px'}}>
           <Conquista  ></Conquista>
          </View>
          
        </View>
        
        
      </div>
    );
  };
  
  export default ProfileContent;
  
  