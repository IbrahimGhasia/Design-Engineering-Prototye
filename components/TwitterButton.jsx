import { Button } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons';

export function TwitterButton() {
	return (
		<Button
			component='a'
			target='_blank'
			rel='noopener noreferrer'
			href='https://twitter.com/mantinedev'
			leftIcon={<IconBrandTwitter size={18} />}
			styles={(theme) => ({
				root: {
					backgroundColor: '#00acee',
					border: 0,
					height: 42,
					paddingLeft: 20,
					paddingRight: 20,

					'&:hover': {
						backgroundColor: theme.fn.darken('#00acee', 0.05),
					},
				},
				leftIcon: {
					marginRight: 15,
				},
			})}
		>
			Twitter
		</Button>
	);
}
