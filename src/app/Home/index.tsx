import {Text, View, Image } from 'react-native';

import {Input} from '@/components/Input'
import { Button } from "@/components/Button"
import { Filter } from '@/components/Filter'
import { FilterStatus } from '@/types/FilterStatus'
 
import { styles } from "./styles"

export function Home() {
  return (
    <View style={styles.container}>

      <Image source={require("@/assets/logo.png")}style={styles.logo}/>

      <View style={styles.form}>

        <Input placeholder="Digite seu e-mail"/>
        <Button tittle='Entrar' activeOpacity={0.8}/>

      </View>

      <View style={styles.content}>

        <Filter status={FilterStatus.DONE} isActive/>
        <Filter status={FilterStatus.PENDING} isActive={false}/>

      </View>

    </View>
  );
}
