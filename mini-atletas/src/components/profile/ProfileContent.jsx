import * as React from "react";
import Girl2 from "@/components/svgs/profile/girl2";
import { Text, View } from "react-native";
import Conquista from "@/components/svgs/profile/conquistas";
import SetaDireita from "@/components/svgs/profile/setadireita";
import { TouchableOpacity } from 'react-native';
import TrofeuAmarelo from "../svgs/profile/trofeuamarelo";
import TrofeuAzul from "../svgs/profile/trofeuazul";
import TrofeuRosa from "../svgs/profile/trofeurosa";
import TrofeuVerde from "../svgs/profile/trofeuverde";
import GrupoFutebol from "@/components/svgs/profile/gruposfutebol";
import GrupoPique from "../svgs/profile/grupopiqueesconde";
import GrupoRosa from "@/components/svgs/profile/gruposrosa";
import Footer from "@/components/svgs/profile/barrafooter";
import Man from "../svgs/profile/man";
import House from "../svgs/profile/house";
import Oi from "../svgs/profile/recompensas";

const ProfileContent = ({ userName }) => {
    const borderColor = "#8928C5"; // Defina a cor da borda aqui
  
    return (
      <View className="flex flex-col justify-center items-center">
        <View > 
          <View>
            <Girl2></Girl2>
          </View>

          <View className="mb-[10px]">
            <View  className="mb-[-15px] mt-[10px]">
              <Text className="text-lg text-gray-500 md:text-xl dark:text-gray-400 mb-2">
                Minhas conquistas
              </Text>
            </View>

          <View>
            <Text>
              <TouchableOpacity>
                <TrofeuAzul style={{position: 'absolute',  top: '20px', left: '45px' }}></TrofeuAzul>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <TrofeuAmarelo style={{position: 'absolute', top: '20px', left: '120px' }}></TrofeuAmarelo>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <TrofeuRosa style={{position: 'absolute', top: '20px', left: '200px' }}></TrofeuRosa>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <TrofeuVerde style={{position: 'absolute', top: '20px', left: '275px' }}></TrofeuVerde>
              </TouchableOpacity>
            </Text>
          </View>


            <Conquista  ></Conquista>
          </View>

          <View>
            <View style={{marginTop:'5px', marginBottom: '5px', display: 'flex', justifyContent: 'space-between'}}>
              <View style={{marginBottom: '10px'}}>
                <Text className="text-lg text-gray-500 md:text-xl dark:text-gray-400 flex items-center">
                  Meu grupos
                  <View style={{marginLeft: 'auto'}}>
                  <TouchableOpacity>
                    <SetaDireita></SetaDireita>
                  </TouchableOpacity>
                  </View>
                </Text>
              </View>

              <View style={{marginBottom: '10px'}}>
                <Text className="flex left-2 items-center">
                  <GrupoFutebol></GrupoFutebol>
                  <GrupoPique style={{position: 'absolute', left: '175px' }}></GrupoPique>
                  
                </Text>
              </View>

              <View style={{marginBottom: '10px'}}>
                <Text className="text-lg text-gray-500 md:text-xl dark:text-gray-400 flex items-center">
                  Minhas atividades
                  <View style={{marginLeft: 'auto'}}>
                  <TouchableOpacity>
                    <SetaDireita></SetaDireita>
                  </TouchableOpacity>
                  </View>
                </Text>
              </View>

            </View>
          </View>
          {/* style={{position: 'fixed', bottom: 0, width: '100%'}} */}
          <View>
          <TouchableOpacity>
            <House style={{position: 'absolute', top: '15px', left: '45px' }}></House>
          </TouchableOpacity>
          <TouchableOpacity>
            <House style={{position: 'absolute', top: '15px', left: '150px' }}></House>
          </TouchableOpacity>
          <TouchableOpacity>
            <Man style={{position: 'absolute', top: '15px', left: '250px' }}></Man>
          </TouchableOpacity>
          
            <Footer></Footer>
          </View>



        </View>
      </View>
    );
  };
  
  export default ProfileContent;
  
  