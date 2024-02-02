import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = (navigation) => {
	return (
		<ScrollView style={styles.container}>
			<View
				style={{
					height: 400,
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
					flex: 1,
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
							width: "auto",
							minWidth: 50,
							height: 400,
							textAlign: "center",
						},
					]}
				>
					by TheShza
				</Text>
			</View>
		</ScrollView>
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
