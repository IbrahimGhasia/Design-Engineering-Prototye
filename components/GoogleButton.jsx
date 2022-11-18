import { Button } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons';

export function GoogleButton() {
	return (
		<Button
			component='a'
			target='_blank'
			rel='noopener noreferrer'
			href='https://google.com'
			leftIcon={<IconBrandGoogle size={18} />}
			styles={(theme) => ({
				root: {
					backgroundColor: 'gray',
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
			Google
		</Button>
	);
}
