import React from "react";
import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import RoundButton from "./components/customButton";

const HomeScreen = (navigation) => {
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.titleText}>My First App</Text>
				<StatusBar hidden={true} backgroundColor='transparent' />
			</View>
			<View style={styles.author}>
				<Text style={styles.authorText}>by TheShza</Text>
			</View>
			<RoundButton
				// style={{}}
				text='i'
				onPress={() => Alert.alert("Simple Button pressed")}
				bgColor='slategray'
				textColor='white'
			/>
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

	author: {
		flex: 2,
		alignItems: "center",
		borderStyle: "solid",
		borderColor: "#00ffff",
		borderWidth: 2,
	},

	authorText: {
		color: "#daa520",
		fontSize: 24,
		backgroundColor: "#5f9ea0",
		width: 200,
		textAlign: "center",
	},

	title: {
		flex: 1,
		borderStyle: "solid",
		borderColor: "#00ffff",
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "center",
	},

	titleText: {
		fontSize: 50,
		color: "#9370db",
	},
});

export default HomeScreen;
