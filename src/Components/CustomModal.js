// React
import React from "react";
import {
StyleSheet,
View,
Text,
Modal,
Pressable,
TouchableWithoutFeedback,
TouchableOpacity
} from "react-native";

export const CustomModal = (props) => {
    return(
        <Modal
          style={{ backgroundColor: "black" }}
          visible={props.visibility}
          animationType="fade"
          transparent={true}
          onRequestClose={()=> props.setVisibility(false)} >
          <View style={{ flex: 1, backgroundColor: "#000000AA" }}>
            <TouchableOpacity style={{width:'100%', height:'100%'}} activeOpacity={1} onPress={()=> props.setVisibility(false)}>
              <TouchableWithoutFeedback>
                <View style={styles.container}>
                  {props.children}
                    <Pressable>
                      <Text style={styles.button} onPress={()=> props.setVisibility(false)} >
                        Regresar
                      </Text>
                    </Pressable>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize:25,
    },
    container: {
        width: '94%',
        height: 'auto', 
        marginTop: '30%',
        marginHorizontal:'2.5%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        width: 150,
        marginTop: 60,
        color: 'white',
        flexDirection: 'column',
        backgroundColor: '#ff4a4a',
        padding: 10,
        fontSize:16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
