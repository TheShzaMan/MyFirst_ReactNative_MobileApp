"use strict";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
	NativeStackView,
	createNativeStackNavigator,
} from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ title: "Home Screen" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
