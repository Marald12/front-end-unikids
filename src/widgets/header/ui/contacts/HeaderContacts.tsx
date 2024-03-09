import { FC } from 'react'
import styles from './HeaderContacts.module.scss'
import Link from 'next/link'
import SocialContacts from '@/widgets/header/ui/social-contacts/SocialContacts'

const HeaderContacts: FC = () => {
	return (
		<div className={styles.contacts}>
			<SocialContacts />
			<div className={styles.links}>
				<Link href=''>Оплата и доставка</Link>
				<Link href=''>Вопрос ответ</Link>
				<Link href=''>О магазине</Link>
				<Link href=''>Контакты</Link>
			</div>
			<div className={styles.phone}>
				<span>Бесплатный звонок</span>
				<b>8 800 200 34 56</b>
			</div>
		</div>
	)
}

export default HeaderContacts
