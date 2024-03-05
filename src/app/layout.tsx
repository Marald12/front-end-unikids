import type { Metadata } from 'next'
import './globals.scss'
import QueryProvider from '@/shared/providers/QueryProvider'
import Header from '@/widgets/header/Header'
import styles from './layout.module.scss'
import Footer from '@/widgets/footer/Footer'

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
			<QueryProvider>
				<body>
					<div className={styles.wrapper}>
						<Header />
						<main>{children}</main>
						<Footer />
					</div>
				</body>
			</QueryProvider>
		</html>
	)
}
