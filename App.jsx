import React from 'react';
import Register from './src/pages/Auth/Register';
import Login from './src/pages/Auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/Home';

const RootStack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<RootStack.Navigator>
				<RootStack.Group>
					<RootStack.Screen name='Home' component={Home} />
				</RootStack.Group>
				<RootStack.Group
					screenOptions={{ presentation: 'fullScreen', headerShown: true }}>
					<RootStack.Screen name='Register' component={Register} />
					<RootStack.Screen name='Login' component={Login} />
				</RootStack.Group>
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
