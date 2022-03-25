// React
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import VerCuestionariosScreen from "./VerCuestionariosScreen"
import CrearCuestionarioScreen from "./CrearCuestionarioScreen"

// Components
import { CustomMenu } from '../Components/CustomMenu'

// Res
import IconEnt from 'react-native-vector-icons/Ionicons'
import { colors } from '../res/colors'

const Tab = createBottomTabNavigator();

function HomeScreen(){

    const screenOptions = (iconName, nameBottom) => ({
        headerTitle: nameBottom,
        tabBarLabel: nameBottom,
        headerTintColor: colors.neutral_color,
        headerRight: () => (
          <CustomMenu></CustomMenu>
        ),
        headerStyle: {
          backgroundColor: colors.primary_dark,
        },
        tabBarActiveTintColor: colors.primary_dark,
        tabBarIcon: ({ focused }) => <IconEnt
          name={iconName}
          size={28}
          color={focused ? colors.primary_dark : colors.light_grey} />
      });

    return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ver"
        component={VerCuestionariosScreen}
        options={screenOptions('ver', 'Mis cuestionarios')}
      />
      <Tab.Screen
        name="Crear"
        component={CrearCuestionarioScreen}
        options={screenOptions('crear', 'Crear cuestionario')} />
    </Tab.Navigator>
    )
}

export default HomeScreen
