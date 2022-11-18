import {
	Box,
	Grid,
	Title,
	TextInput,
	Select,
	Textarea,
	Center,
	Divider,
	Button,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import {
	IconCalendar,
	IconMan,
	IconPhoneCall,
	IconUser,
	IconAt,
	IconBuildingBank,
	IconSquareNumber0,
	IconPin,
	IconCircleCheck,
} from '@tabler/icons';
import { useState } from 'react';

const RegisterCustomer = () => {
	const [custName, setCustName] = useState('');
	const [bod, setBod] = useState(new Date());
	const [gender, setGender] = useState('');
	const [address, setAddress] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [holderName, setHolderName] = useState('');
	const [accNumber, setAccNumber] = useState('');
	const [branch, setBranch] = useState('');
	const [bank, setBank] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(
			custName,
			bod,
			gender,
			address,
			contact,
			email,
			holderName,
			accNumber,
			branch,
			bank
		);
	};
	return (
		<div>
			<Box sx={{ maxWidth: 900 }} mx='auto'>
				<Center mt={20}>
					<Title>Add New Customer</Title>
				</Center>
				<Divider
					my='xs'
					variant='dashed'
					labelPosition='center'
					label={
						<>
							<IconUser size={20} />
							<Box ml={5} fz='lg'>
								Customer Personal Details
							</Box>
						</>
					}
				/>
				<form>
					<Grid mt={20}>
						<Grid.Col sm={6} lg={6}>
							<TextInput
								icon={<IconUser />}
								label='Name'
								withAsterisk
								variant='filled'
								placeholder='Customer Name'
								size='md'
								onChange={(event) => {
									setCustName(event.target.value);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={3}>
							<DatePicker
								dropdownType='modal'
								placeholder='Choose Date'
								label='Birth Date'
								variant='filled'
								icon={<IconCalendar />}
								withAsterisk
								size='md'
								onChange={(event) => {
									setBod(
										(event.value = new Date()
											.toJSON()
											.slice(0, 10))
									);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={3}>
							<Select
								label='Gender'
								placeholder='Pick one'
								icon={<IconMan />}
								variant='filled'
								searchable
								nothingFound='No options'
								data={[
									'Male',
									'Female',
									'Non-Binary',
									'Prefer not to say',
								]}
								withAsterisk
								size='md'
								onChange={(event) => {
									setGender(event);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={12}>
							<Textarea
								placeholder='Enter your permenant Address'
								label='Address'
								variant='filled'
								withAsterisk
								minRows={4}
								onChange={(event) => {
									setAddress(event.target.value);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={6}>
							<TextInput
								icon={<IconPhoneCall />}
								label='Contact'
								withAsterisk
								variant='filled'
								placeholder='Contact Number'
								size='md'
								onChange={(event) => {
									setContact(event.target.value);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={6}>
							<TextInput
								label='Email Id'
								withAsterisk
								variant='filled'
								icon={<IconAt />}
								placeholder='Your email'
								size='md'
								onChange={(event) => {
									setEmail(event.target.value);
								}}
							/>
						</Grid.Col>
					</Grid>

					<Divider
						my='xl'
						variant='dashed'
						labelPosition='center'
						label={
							<>
								<IconBuildingBank size={20} />
								<Box ml={5} fz='lg'>
									Customer Bank Details
								</Box>
							</>
						}
					/>

					<Grid>
						<Grid.Col sm={6} lg={6}>
							<TextInput
								icon={<IconUser />}
								label='Name'
								withAsterisk
								variant='filled'
								placeholder='Account Holder Name'
								size='md'
								onChange={(event) => {
									setHolderName(event.target.value);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={3}>
							<TextInput
								icon={<IconSquareNumber0 />}
								label='Account Number'
								withAsterisk
								variant='filled'
								placeholder='Account Number'
								size='md'
								onChange={(event) => {
									setAccNumber(event.target.value);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={3}>
							<TextInput
								icon={<IconPin />}
								label='Branch'
								withAsterisk
								variant='filled'
								placeholder='Branch Name'
								size='md'
								onChange={(event) => {
									setBranch(event.target.value);
								}}
							/>
						</Grid.Col>

						<Grid.Col sm={6} lg={12}>
							<TextInput
								icon={<IconBuildingBank />}
								label='Bank'
								withAsterisk
								variant='filled'
								placeholder='Bank Name'
								size='md'
								onChange={(event) => {
									setBank(event.target.value);
								}}
							/>
						</Grid.Col>
					</Grid>

					<Center mt={40}>
						<div style={{ width: 500 }}>
							<Button
								leftIcon={<IconCircleCheck size={20} />}
								fullWidth
								size='md'
								onClick={handleSubmit}
							>
								Submit
							</Button>
						</div>
					</Center>
				</form>
			</Box>
		</div>
	);
};

export default RegisterCustomer;
