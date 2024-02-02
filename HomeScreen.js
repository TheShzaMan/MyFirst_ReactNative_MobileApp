import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = (navigation) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#66cdaa",
			alignItems: "center",
			justifyContent: "center",
		},
		title: {
			fontSize: 50,
			color: "#9370db",
		},
	});
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.title}>My First App</Text>
				<StatusBar style='auto' />
			</View>
			<View
				style={[
					styles.container,
					{
						position: "absolute",
						top: "55%",
						left: "50%",
					},
				]}
			>
				<Text
					style={[
						styles.two,
						{
							color: "#daa520",
							fontSize: 24,
							backgroundColor: "#5f9ea0",
							width: "auto",
							minWidth: 50,
							alignContent: "stretch",
						},
					]}
				>
					by TheShza
				</Text>
			</View>
		</View>
	);
};

export default HomeScreen;
