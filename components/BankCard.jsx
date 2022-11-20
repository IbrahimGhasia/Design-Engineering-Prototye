import { Card, Title, List } from '@mantine/core';
import {
	IconBrandMastercard,
	IconBuildingBank,
	IconId,
	IconMapPin,
	IconWallet,
} from '@tabler/icons';

const BankCard = ({ item }) => {
	return (
		<div>
			<Card shadow='sm' p='xl' mt={20} component='a' target='_blank'>
				<Title order={2} underline>
					{item.cust_holder_name}
				</Title>

				<List size='lg' mt={10}>
					<List.Item icon={<IconId />}>
						Customer Id: {item.custBankDetailID}
					</List.Item>
					<List.Item icon={<IconWallet />}>
						Wallet Address: {item.address}
					</List.Item>
					<List.Item icon={<IconBrandMastercard />}>
						Account Number: {item.cust_account_number}
					</List.Item>
					<List.Item icon={<IconMapPin />}>
						Branch: {item.cust_branch}
					</List.Item>
					<List.Item icon={<IconBuildingBank />}>
						Bank: {item.cust_bank}
					</List.Item>
				</List>
			</Card>
		</div>
	);
};

export default BankCard;
