import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native'


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