// React
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Menu, MenuItem } from "react-native-material-menu"

// Res
import IconEnt from 'react-native-vector-icons/Entypo'
import { colors } from "../res/colors"

export const CustomMenu = (props) => {

	let _menu = false;
	return (
		<View
			style={styles.container}>
			<Menu
				ref={(ref) => (_menu = ref)}
				anchor={
					<TouchableOpacity
						onPress={() => _menu.show()}
						style={styles.btnClickContain}>
						<IconEnt
							name="dots-three-vertical"
							size={25}
							color={colors.neutral_color}
							style={{ width: 30, height: 30 }}
						/>
					</TouchableOpacity>
				}
				onRequestClose={() => _menu.hide()}
			  >
				<MenuItem onPress={() => {
					_menu.hide();
				}}><Text style={{color:"black"}}>Cerrar Sesión</Text></MenuItem>
			</Menu>
		</View >
	);
};

let styles = StyleSheet.create({
	btnClickContain: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'auto',
		borderRadius: 5,
		padding: 5,
		marginTop: 5,
		marginBottom: 5,
	},
	container: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	}
});