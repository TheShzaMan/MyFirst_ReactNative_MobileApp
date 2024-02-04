import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CustomButton } from "./components/customButton";

const HomeScreen = (navigation) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 1,
					borderStyle: "solid",
					borderColor: "#00ffff",
					borderWidth: 2,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={styles.title}>My First App</Text>
				<StatusBar style='auto' />
			</View>
			<View
				style={{
					flex: 2,
					alignItems: "center",
					borderStyle: "solid",
					borderColor: "#00ffff",
					borderWidth: 2,
				}}
			>
				<Text
					style={[
						{
							color: "#daa520",
							fontSize: 24,
							backgroundColor: "#5f9ea0",
							width: 200,
							// minWidth: 50,
							// height: 400,
							textAlign: "center",
						},
					]}
				>
					by TheShza
				</Text>
			</View>
			<CustomButton />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// height: "100%",
		backgroundColor: "black",
		borderStyle: "solid",
		borderColor: "#00ffff",
		borderWidth: 2,
	},

	title: {
		fontSize: 50,
		color: "#9370db",
	},
});

export default HomeScreen;
