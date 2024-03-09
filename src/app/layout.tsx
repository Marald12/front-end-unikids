import type { Metadata } from 'next'
import './globals.scss'
import QueryProvider from '@/shared/providers/QueryProvider'
import Header from '@/widgets/header/Header'
import styles from './layout.module.scss'
import Footer from '@/widgets/footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
	title: 'Unikids - Магазин детской одежды',
	description:
		'Мы предлагаем широкий ассортимент модной и качественной детской одежды для мальчиков и девочек в возрасте от 0 до 12 лет.\n' +
		'Наши товары изготовлены из высококачественных материалов, обеспечивающих комфорт и безопасность для вашего малыша.\n' +
		'В нашем магазине вы найдете разнообразие стилей и цветов, чтобы подчеркнуть индивидуальность вашего ребенка.\n' +
		'Мы следим за последними модными тенденциями, поэтому у нас всегда можно найти актуальные модели одежды для детей.\n' +
		'Наша команда всегда готова помочь вам подобрать правильный размер или ответить на вопросы о товарах.'
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
						<NextTopLoader />
						<Header />
						<main>{children}</main>
						<Footer />
						<ToastContainer position='bottom-right' />
					</div>
				</body>
			</QueryProvider>
		</html>
	)
}
