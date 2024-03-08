import { FC } from 'react'
import styles from './HeaderContacts.module.scss'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF, FaTelegram } from 'react-icons/fa'

const HeaderContacts: FC = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.contacts_socials}>
				<Link href='https://instagram.com' target='_blank'>
					<AiFillInstagram size={23} />
				</Link>
				<Link href='https://facebook.com' target='_blank'>
					<FaFacebookF size={23} />
				</Link>
				<Link href='https://web.telegram.org' target='_blank'>
					<FaTelegram size={23} />
				</Link>
			</div>
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
