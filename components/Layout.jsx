import { useState } from 'react';
import {
	AppShell,
	createStyles,
	Navbar,
	Group,
	Header,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	useMantineColorScheme,
} from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import {
	IconSwitchHorizontal,
	IconLogout,
	IconSun,
	IconMoonStars,
	IconHome,
	IconUserPlus,
	IconUsers,
} from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef('icon');
	return {
		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: theme.spacing.md * 1.5,
			borderBottom: `1px solid ${
				theme.colorScheme === 'dark'
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		footer: {
			paddingTop: theme.spacing.md,
			marginTop: theme.spacing.md,
			borderTop: `1px solid ${
				theme.colorScheme === 'dark'
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		link: {
			...theme.fn.focusStyles(),
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			color:
				theme.colorScheme === 'dark'
					? theme.colors.dark[1]
					: theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				color: theme.colorScheme === 'dark' ? theme.white : theme.black,

				[`& .${icon}`]: {
					color:
						theme.colorScheme === 'dark'
							? theme.white
							: theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color:
				theme.colorScheme === 'dark'
					? theme.colors.dark[2]
					: theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			'&, &:hover': {
				backgroundColor: theme.fn.variant({
					variant: 'light',
					color: theme.primaryColor,
				}).background,
				color: theme.fn.variant({
					variant: 'light',
					color: theme.primaryColor,
				}).color,
				[`& .${icon}`]: {
					color: theme.fn.variant({
						variant: 'light',
						color: theme.primaryColor,
					}).color,
				},
			},
		},
	};
});

const data = [
	{ link: '/home', label: 'Home', icon: IconHome },
	{ link: '/customers', label: 'View Customers', icon: IconUsers },
	{ link: '/register', label: 'Add new Customer', icon: IconUserPlus },
];

export default function Layout(props) {
	const theme = useMantineTheme();
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const [opened, setOpened] = useState(false);
	const { classes, cx } = useStyles();
	const [active, setActive] = useState('Billing');

	const links = data.map((item) => (
		<Link href={item.link} legacyBehavior>
			<a
				className={cx(classes.link, {
					[classes.linkActive]: item.label === active,
				})}
				href={item.link}
				key={item.label}
				onClick={(event) => {
					// event.preventDefault();
					setActive(item.label);
				}}
			>
				<item.icon className={classes.linkIcon} stroke={1.5} />
				<span>{item.label}</span>
			</a>
		</Link>
	));

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			navbar={
				<Navbar
					p='md'
					hiddenBreakpoint='sm'
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
				>
					<Navbar.Section grow>
						<Group className={classes.header} position='apart'>
							<Group position='center'>
								<ActionIcon
									onClick={() => toggleColorScheme()}
									size='lg'
									sx={(theme) => ({
										backgroundColor:
											theme.colorScheme === 'dark'
												? theme.colors.dark[6]
												: theme.colors.gray[0],
										color:
											theme.colorScheme === 'dark'
												? theme.colors.yellow[4]
												: theme.colors.blue[6],
									})}
								>
									{colorScheme === 'dark' ? (
										<IconSun size={18} />
									) : (
										<IconMoonStars size={18} />
									)}
								</ActionIcon>
							</Group>
						</Group>
						{links}
					</Navbar.Section>

					<Navbar.Section className={classes.footer}>
						<a
							href='#'
							className={classes.link}
							onClick={(event) => event.preventDefault()}
						>
							<IconSwitchHorizontal
								className={classes.linkIcon}
								stroke={1.5}
							/>
							<span>Change account</span>
						</a>

						<a
							href='#'
							className={classes.link}
							onClick={(event) => event.preventDefault()}
						>
							<IconLogout
								className={classes.linkIcon}
								stroke={1.5}
							/>
							<span>Logout</span>
						</a>
					</Navbar.Section>
				</Navbar>
			}
			header={
				<Header height={{ base: 50, md: 70 }} p='md'>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							height: '100%',
						}}
					>
						<MediaQuery
							largerThan='sm'
							styles={{ display: 'none' }}
						>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size='sm'
								color={theme.colors.gray[6]}
								mr='xl'
							/>
						</MediaQuery>

						<MediaQuery
							largerThan='md'
							styles={(theme) => ({
								fontSize: theme.fontSizes.xl,
							})}
						>
							<Text fz='xl' fw={700}>
								Biometric Payment
							</Text>
						</MediaQuery>
					</div>
				</Header>
			}
		>
			{props.children}
		</AppShell>
	);
}
