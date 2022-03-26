import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

// si no hay cuestionarias renderiza componente no hay nada
    // si hay cuestionarias renderiza componente mostrar cuestionarios y buscador
function VerCuestionariosScreen(){
    return (
        <View>
            <Text style={styles.text}>Crear cuestionario</Text>
        </View>
    )
}

export default VerCuestionariosScreen

const styles = StyleSheet.create({
    text:{
        color: "black",
    }
})