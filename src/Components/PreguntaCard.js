import React from 'react'

import {View,Text} from 'react-native'

const PreguntaCard = (props) => {

    const information = props.info.item
    console.log("kaka",information)
    // console.log("kaka",props)
    return (
        <View style={{backgroundColor:"red"}}>
            <Text style={{color:"black"}}>{information.pregunta}</Text>
            <Text style={{color:"black"}}>{information.respuesta}</Text>
        </View>
    )
}

export default PreguntaCard