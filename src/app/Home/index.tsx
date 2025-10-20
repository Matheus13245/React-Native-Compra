import {Text, View, Image, TouchableOpacity} from 'react-native';

import { Item } from '@/components/Item';
import {Input} from '@/components/Input'
import { Button } from "@/components/Button"
import { Filter } from '@/components/Filter'

 import { FilterStatus } from '@/types/FilterStatus'
import { styles } from "./styles"


const FILTER_STATUS: FilterStatus [] = [FilterStatus.DONE, FilterStatus.PENDING]

export function Home() {
  return (
    <View style={styles.container}>

      <Image source={require("@/assets/logo.png")}style={styles.logo}/>

      <View style={styles.form}>

        <Input placeholder="Oque você deseja comprar?"/>
        <Button tittle='Entrar' activeOpacity={0.8}/>

      </View>

      <View style={styles.content}>
        <View style={styles.header}>
            {FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive/>
            ))}
            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearText}>Limpar</Text>
            </TouchableOpacity>
        </View>
        <Item
         data={{ status: FilterStatus.DONE, description: "Café" }}
         onStatus={() => console.log("Muda Status")}
         onRemove={() => console.log("Remover")}
         />
      </View>
    </View>
  );
}
