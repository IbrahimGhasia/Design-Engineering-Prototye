import { Card, Image, List, Text, Title, Accordion } from '@mantine/core';
import {
	IconCalendar,
	IconHome,
	IconId,
	IconMail,
	IconMan,
	IconPhoneCall,
	IconWallet,
} from '@tabler/icons';

const CustomerCard = ({ item }) => {
	return (
		<div>
			{/* <Card shadow='sm' p='xl' mt={20} component='a' target='_blank'>
				<Title order={2} underline>
					{item.cust_name}
				</Title>

				<List size='lg' mt={10}>
					<List.Item icon={<IconMail />}>
						Email: {item.cust_email}
					</List.Item>
					<List.Item icon={<IconPhoneCall />}>
						Contact: {item.cust_contact}
					</List.Item>
					<List.Item icon={<IconHome />}>
						Address: {item.cust_address}
					</List.Item>
					<List.Item icon={<IconMan />}>
						Gender: {item.cust_gender}
					</List.Item>
					<List.Item icon={<IconCalendar />}>
						BirthDate: {item.cust_dob}
					</List.Item>
				</List>
			</Card> */}
			<Accordion
				variant='filled'
				radius='md'
				chevronPosition='left'
				// disableChevronRotation
				defaultValue='Customer Detail'
				mt={20}
			>
				<Accordion.Item value='Customer Detail'>
					<Accordion.Control>
						<Text fz='xl' fw={700}>
							{item.cust_name}
						</Text>
					</Accordion.Control>
					<Accordion.Panel>
						<Title order={3} underline>
							Customer Personal Details
						</Title>

						<List size='lg' mt={10}>
							<List.Item icon={<IconId />}>
								Customer Id: {item.custID}
							</List.Item>
							<List.Item icon={<IconWallet />}>
								Wallet Address: {item.address}
							</List.Item>
							<List.Item icon={<IconMail />}>
								Email: {item.cust_email}
							</List.Item>
							<List.Item icon={<IconPhoneCall />}>
								Contact: {item.cust_contact}
							</List.Item>
							<List.Item icon={<IconHome />}>
								Address: {item.cust_address}
							</List.Item>
							<List.Item icon={<IconMan />}>
								Gender: {item.cust_gender}
							</List.Item>
							<List.Item icon={<IconCalendar />}>
								BirthDate: {item.cust_dob}
							</List.Item>
						</List>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};
export default CustomerCard;
