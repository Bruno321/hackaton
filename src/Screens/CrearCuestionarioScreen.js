import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native'


function CrearCuestionarioScreen(){
    return (
        <View>
            <Text style={styles.text}>Crear cuestionario</Text>
        </View>
    )
}

export default CrearCuestionarioScreen
const styles = StyleSheet.create({
    text:{
        color: "black",
    }
})