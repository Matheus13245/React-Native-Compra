import {TouchableOpacity, Text, TouchableOpacityProps} from "react-native"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    tittle: string
}


export function Button({ tittle, ...rest }: Props){
    return(
    <TouchableOpacity style={styles.container}activeOpacity={0.8} {...rest}>
        <Text style={styles.tittle}>{tittle}</Text>
    </TouchableOpacity>
    )}