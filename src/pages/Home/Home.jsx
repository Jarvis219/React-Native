import React from 'react';
import { View, Text } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import Button from '../../components/Button/Button';
import { useLinkTo } from '@react-navigation/native';

const Home = () => {
	const navigationRef = useLinkTo();
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button
				label='register'
				onPress={() => {
					navigationRef('/Register');
				}}
			/>
		</View>
	);
};

const styles = {
	container: [t.flex1, t.justifyCenter, t.itemsCenter],
};

export default Home;
