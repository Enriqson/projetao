import * as React from "react";
import { Card } from "@/components/ui/card";
import Girl from "@/components/svgs/profile/girl";
import Bola from "@/components/svgs/profile/bola";
import { Text, View } from "react-native";
import Trofeu from "@/components/svgs/profile/trophy";

const ProfileContent = ({ userName }) => {
    const borderColor = "#8928C5"; // Defina a cor da borda aqui
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Card className="flex flex-row" style={{border: `2px solid black`, borderRadius: '8px', padding: '10px', width: '80%' }}>
          <Bola borderColor={borderColor}>
            <Girl x={27} y={18} />
          </Bola>
          <View className="ml-4" style={{marginTop: '30px'}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#8928C5' }}>{userName}</Text>
            <Text style={{ fontSize: 16, color: '#8928C5' }}>Futebol</Text>
            <View className="flex flex-row items-center">
                <Trofeu></Trofeu>
                <Text style={{ fontSize: 16, color: '#8928C5' }}>5x</Text>
            </View>
            <Text style={{ fontSize: 16, color: '#8928C5' }}>Corredora</Text>
            
            
          </View>
        </Card>
      </div>
    );
  };
  
  export default ProfileContent;
  
  