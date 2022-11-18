import '../styles/globals.css';
import Head from 'next/head';
import { useState } from 'react';
import { AppProps } from 'next/app';
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
	[chain.polygon, chain.polygonMumbai],
	[publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: 'My RainbowKit App',
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

function MyApp({ Component, pageProps }) {
	const [colorScheme, setColorScheme] = useState('light');
	const toggleColorScheme = (ColorScheme) =>
		setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
	return (
		<>
			<Head>
				<title>Biometric Payment System</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<WagmiConfig client={wagmiClient}>
				<ColorSchemeProvider
					colorScheme={colorScheme}
					toggleColorScheme={toggleColorScheme}
				>
					<MantineProvider
						withGlobalStyles
						withNormalizeCSS
						theme={{
							colorScheme,
						}}
					>
						<NotificationsProvider>
							<RainbowKitProvider chains={chains}>
								<Component {...pageProps} />
							</RainbowKitProvider>
						</NotificationsProvider>
					</MantineProvider>
				</ColorSchemeProvider>
			</WagmiConfig>
		</>
	);
}

export default MyApp;
