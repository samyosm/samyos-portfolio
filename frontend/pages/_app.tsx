import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from '../contexts/ApolloClient';
import React from 'react';

export default function App({Component, pageProps}: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
