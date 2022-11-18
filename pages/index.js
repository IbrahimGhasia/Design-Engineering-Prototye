import { Title, Center } from '@mantine/core';
import RegisterHost from '../components/RegisterHost';
export default function Home() {
	return (
		<div>
			<Center mt={40}>
				<Title underline>Welcome to Biometric Payment System</Title>
			</Center>

			<Center mt={20}>
				<RegisterHost />
			</Center>
		</div>
	);
}
