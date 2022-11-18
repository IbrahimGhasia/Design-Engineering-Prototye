import Layout from '../components/Layout';
import { Center, Title, Button, Group } from '@mantine/core';
import { IconUserPlus } from '@tabler/icons';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
	return (
		<div>
			<Layout>
				<Group position='right' m={20}>
					<ConnectButton />
				</Group>

				<Center mt={20}>
					<Title>Welcome to Biometric Payment</Title>
				</Center>

				<Center mt={40}>
					<Link href='/register'>
						<Button leftIcon={<IconUserPlus size={14} />}>
							Add new Customer
						</Button>
					</Link>
				</Center>
			</Layout>
		</div>
	);
}
