import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Text, View, Switch, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { t, color } from 'react-native-tailwindcss';
import { useLinkTo } from '@react-navigation/native';
const Register = () => {
	const navigationRef = useLinkTo();
	const [toggle, setToggle] = React.useState(false);
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirm: '',
			toggle: '',
		},
	});

	const toggleChange = () => {
		setToggle((state) => !state);
	};

	const onsubmit = (data) => {
		if (!data) return;
		data.toggle = toggle;
		if (data.password !== data.confirm) {
			Alert.alert('password not match');
			return;
		}
		Alert.alert('Register successfully');
		navigationRef('/Login');
	};
	return (
		<View style={styles.container}>
			<Controller
				name='name'
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Name'
					/>
				)}
			/>
			{errors.name && <Text style={styles.errors}>This is required.</Text>}

			<Controller
				name='email'
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Email'
					/>
				)}
			/>
			{errors.email && <Text style={styles.errors}>This is required.</Text>}
			<Controller
				name='password'
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						password={true}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Password'
					/>
				)}
			/>
			{errors.password && <Text style={styles.errors}>This is required.</Text>}
			<Controller
				name='confirm'
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						password={true}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Confirm password'
					/>
				)}
			/>
			{errors.confirm && <Text style={styles.errors}>This is required.</Text>}
			<View style={styles.switch}>
				<Switch
					trackColor={{ false: color.gray100, true: color.green600 }}
					thumbColor={{ false: color.gray100, true: color.green600 }}
					ios_backgroundColor={color.green900}
					onValueChange={toggleChange}
					value={toggle}
				/>
				<Text style={styles.switchText}>Tran Anh Quang</Text>
			</View>
			<View style={styles.button}>
				<View style={{ paddingRight: 10 }}>
					<Button onPress={handleSubmit(onsubmit)} label='Register' />
				</View>
				<View style={{ paddingLeft: 10 }}>
					<Button
						onPress={() => {
							navigationRef('/Login');
						}}
						label='Login'
					/>
				</View>
			</View>
			{/* <Button label='footer' /> */}
		</View>
	);
};

export default Register;

const styles = {
	container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p10, t.bgYellow100],
	switch: [t.mY4, t.selfStart, t.flexRow, t.itemsCenter],
	switchText: [t.textBase, t.mR3, t.textGray800, t.pL2],
	errors: [t.mT1, t.fontSerif, t.textXs, t.selfStart, t.mL1, t.textRed600],
	button: [t.flexRow],
};
