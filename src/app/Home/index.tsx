import {Text, View, Image } from 'react-native';

import { Button } from "@/components/Button"
 
import { styles } from "./styles"

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")}style={styles.logo}/>
      <Button
      tittle='Entrar'
      activeOpacity={0.8}
      />
    </View>
  );
}
