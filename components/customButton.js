import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { AutoSizeText } from "react-native-auto-size-text";

export default function RoundButton({ onPress, text, bgColor, textColor }) {
	// const CustomButton = ({ onPress, text, bgColor }) => {

	return (
		<Pressable onPress={onPress}>
			<View
				style={{
					borderRadius: 50,
					borderWidth: 1,
					borderColor: textColor,
					padding: 3,
					backgroundColor: bgColor,
					height: 70,
					width: 70,
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						lineHeight: 70,
						textAlign: "center",
						color: textColor,
						textTransform: "uppercase",
						fontSize: 32,
					}}
				>
					{text}
				</Text>
			</View>
		</Pressable>
	);
}

// export default CustomButton;
