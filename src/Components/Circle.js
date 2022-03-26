import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'


function Circle({title,number}){
    
// primero renderizar componente agregar nombre, luego agregar preguntas y visualizar
    return (
        <View>
            <View style={styles.circle}>
                <Text style={{color:"black"}}>{number}</Text>
            </View>
            <Text style={{color:"#DAA49A"}}>{title}</Text>
        </View>
    )
}

export default Circle

const styles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#D8DBE2",
        textAlign: "center",
        alignItems: "center"
    }
})