import React, {useState,useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

// Components
import Circle from "../Components/Circle";
import PreguntaCard from "../Components/PreguntaCard";
import { CustomModal } from '../Components/CustomModal'
import  ModalContent  from '../Components/ModalContent'


function CrearCuestionarioScreen(){
    
    const [nav,setNav] = useState(1)
    const [nombre,setNombre] = useState("")
    const [materia,setMateria] = useState("")
    const [preguntas,setPreguntas] = useState([])
    const [pregunta,setPregunta] = useState("")
    const [respuesta,setRespuesta] = useState("")
    const [frecuencia,setFrecuencia] = useState(4)
    const [visibility, setVisibility] = useState(false);

    const handleClick = () => {
        setNav(nav + 1)
        console.log("Me picaste", nav)
    }

    const agregarPregunta = () => {
        setPreguntas([...preguntas,{pregunta:pregunta,respuesta:respuesta}])
        console.log('click')
    }

    useEffect(()=>{
        console.log(preguntas)
    },)
// primero renderizar componente agregar nombre, luego agregar preguntas y visualizar
    if (nav===1){
        return (
            <View>
                <View></View>
                <View>
                    <Circle title={"Agrega un nombre"} number={1}></Circle>
                    <Circle title={"Agrega tus preguntas"} number={2}></Circle>
                    <Circle title={"Visualiza tu cuestionario"} number={3}></Circle>
                </View>
                <View>
                    <Text style={styles.text}>Nombre del cuestionario</Text>
                    <TextInput style={styles.input} onChangeText={a=>setNombre(a)} defaultValue={nombre}/>
    
                    <Text style={styles.text}>Materia</Text>
                    <TextInput  style={styles.input} placeholder="(Opcional)" placeholderTextColor="black" onChangeText={a=>setMateria(a)} defaultValue={materia} />
                </View>
    
                <Pressable 
                    style={styles.button}
                    onPress={()=>handleClick()}
                
                >
                    <Text style={styles.text}>Siguiente</Text>
                </Pressable>
            </View>
        )
    }
    if(nav===2){
        return (
            <View>
                <View></View>
                <View>
                    <Circle title={"Agrega un nombre"} number={1}></Circle>
                    <Circle title={"Agrega tus preguntas"} number={2}></Circle>
                    <Circle title={"Visualiza tu cuestionario"} number={3}></Circle>
                </View>
                <View>
                    <Text style={styles.text}>Pregunta</Text>
                    <TextInput style={styles.input} 
                        onChangeText={a=>setPregunta(a)} defaultValue={pregunta}
                    />
    
                    <Text style={styles.text}>Respuesta</Text>
                    <TextInput  style={styles.input} 
                        onChangeText={a=>setRespuesta(a)} defaultValue={respuesta}
                    />
                </View>
    
                <Pressable 
                    style={styles.button}
                    onPress={()=>agregarPregunta()}
                
                >
                    <Text style={styles.text}>Agregar pregunta</Text>
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={()=>handleClick()}
                
                >
                    <Text style={styles.text}>NEXT</Text>
                </Pressable>
            </View>
        )
    }
    
    if(nav===3){
        return (
            <View>
                <CustomModal setVisibility={setVisibility} visibility={visibility}>
                    <ModalContent/>
                </CustomModal>
                <View></View>
                <View>
                    <Circle title={"Agrega un nombre"} number={1}></Circle>
                    <Circle title={"Agrega tus preguntas"} number={2}></Circle>
                    <Circle title={"Visualiza tu cuestionario"} number={3}></Circle>
                </View>
                <View>
                    <Text style={styles.text}>Previsualizacion</Text>
                    <FlatList
                        data={preguntas}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.pregunta.toString()}
                        renderItem={item => (
                            <PreguntaCard info={item}/>
                        )}
                    />
                </View>
    
                <View>
                    <Text style={styles.text}>Frecuencia de pregunta:</Text>
                    <TextInput  
                        style={styles.input} placeholder="ej. 24" 
                        placeholderTextColor="black"
                        onChangeText={a=>setFrecuencia(a)} defaultValue={frecuencia}
                    />
                    <Text style={styles.text}>Horas</Text>
                </View>

                <Pressable 
                    style={styles.button}
                    onPress={()=>setVisibility(true)}
                >
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
            </View>
        )
    }
}

export default CrearCuestionarioScreen
const styles = StyleSheet.create({
    text:{
        color: "black",
    },
    input: {
        borderColor: "black",
        borderRadius: 2,
        color: "black"
    },
    button:{
        backgroundColor: "#DAA49A"
    }
})