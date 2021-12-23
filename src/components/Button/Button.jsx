import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';

const Button = ({ label, ...props }) => {
	return (
		<TouchableOpacity activeOpacity={0.8} {...props} style={styles.button}>
			<Text style={styles.buttonLabel}>{label}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = {
	button: [
		t.selfStretch,
		t.bgGreen500,
		t.itemsCenter,
		t.pY3,
		t.rounded,
		t.pX10,
	],
	buttonLabel: [t.textWhite, t.textLg],
};
