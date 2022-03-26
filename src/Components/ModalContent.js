// React
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

function ModalContent(props) {

    // const dataToShow = props.dataToShow
    return (
      <View>
        <Text style={styles.title}>titulo</Text>
        <View style={styles.dates}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.text}>Imagen</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', borderLeftColor: 'grey', borderLeftWidth: 1,}}>
            <Text style={styles.text}>Titulo</Text>
          </View>
        </View>
        <Text style={styles.text}>texto</Text>
      </View>
    );
  }

export default ModalContent;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: "black"

  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    color: "black"
  },
  dateText: {
    fontSize: 16,
    margin: 15,
    textAlign:'center',
    color: "black"
  },
  dates: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    width:'90%',
    color: "black"

  }
});