import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import CustomerCard from './CustomerCard';

const ViewCustomer = () => {
	const [cust, setCust] = useState([]);
	const [custBank, setCustBank] = useState([]);
	useEffect(() => {
		fetchPost();
	}, []);

	const fetchPost = async () => {
		const custPersonalData = await fetch(
			'https://testnet.tableland.network/query?s=SELECT%20*%20FROM%20_customerTable_80001_4042'
		);
		const custPersonalDataJSON = await custPersonalData.json();
		setCust(custPersonalDataJSON);

		const customerBankData = await fetch(
			'https://testnet.tableland.network/query?s=SELECT%20*%20FROM%20_customerBankDetailsTable_80001_4043'
		);
		const customerBankDataJSON = await customerBankData.json();
		setCustBank(customerBankDataJSON);
	};

	return (
		<div>
			{cust.map((item) => (
				<CustomerCard key={item.custID} item={item} />
			))}
		</div>
	);
};

export default ViewCustomer;
