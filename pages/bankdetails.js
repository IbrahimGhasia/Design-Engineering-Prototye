import { Title } from '@mantine/core';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import BankCard from '../components/BankCard';

export default function Home() {
	const [custBank, setCustBank] = useState([]);
	useEffect(() => {
		fetchPost();
	}, []);

	const fetchPost = async () => {
		const customerBankData = await fetch(
			'https://testnet.tableland.network/query?s=SELECT%20*%20FROM%20_customerBankDetailsTable_80001_4043'
		);
		const customerBankDataJSON = await customerBankData.json();
		setCustBank(customerBankDataJSON);
	};
	return (
		<div>
			<Layout>
				<Title>Customer Bank Details</Title>
				{custBank.map((item) => (
					<BankCard key={item.custBankDetailID} item={item} />
				))}
			</Layout>
		</div>
	);
}
