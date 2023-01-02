import {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

export default function Document() {
	return (
		<Html lang='en'>
			<Head/>
			<body>
				<div className='main-layout'>
					<Main/>
				</div>
				<NextScript/>
			</body>
		</Html>
	);
}
