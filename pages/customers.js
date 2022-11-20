import { Title } from '@mantine/core';
import Layout from '../components/Layout';
import ViewCustomer from '../components/ViewCustomer';

export default function Home() {
	return (
		<div>
			<Layout>
				<Title>Customer Details</Title>
				<ViewCustomer />
			</Layout>
		</div>
	);
}
