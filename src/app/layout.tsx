import type { Metadata } from 'next'
import './globals.css'
import QueryProvider from '@/shared/providers/QueryProvider'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}
