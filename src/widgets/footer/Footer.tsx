import { FC } from 'react'
import styles from './Footer.module.scss'
import logoImage from '@/assets/images/Unikids_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import SocialContacts from '@/widgets/header/ui/social-contacts/SocialContacts'

const Footer: FC = () => {
	return (
		<>
			<footer className={styles.wrapper}>
				<div className={styles.logo}>
					<Image src={logoImage} alt={logoImage} />
					<Link href='/'>Политика конфиденциальности</Link>
					<Link href='/'>Пользовательское соглашение</Link>
				</div>
				<div className={styles.links}>
					<p>О магазине</p>
					<ul>
						<li>
							<Link href='/'>Доставка и оплата</Link>
						</li>
						<li>
							<Link href='/'>Сертификация</Link>
						</li>
						<li>
							<Link href='/'>Вопрос-ответ</Link>
						</li>
						<li>
							<Link href='/'>Контакты</Link>
						</li>
					</ul>
				</div>
				<div className={styles.links}>
					<p>Каталог</p>
					<ul>
						<li>
							<Link href='/'>Одежда для девочек</Link>
						</li>
						<li>
							<Link href='/'>Одежда для мальчиков</Link>
						</li>
						<li>
							<Link href='/'>Новинки</Link>
						</li>
						<li>
							<Link href='/'>Акции</Link>
						</li>
						<li>
							<Link href='/'>Популярное</Link>
						</li>
					</ul>
				</div>
				<div className={styles.contacts}>
					<SocialContacts />
					<div>
						<span>
							Телефон: <b>8 800 200 35 67</b>
						</span>
						<span>
							E-mail: <b>info@domain.ru</b>
						</span>
						<span>
							Адрес: <b>Москва, ул. Карла Маркса, д 5</b>
						</span>
					</div>
				</div>
			</footer>
			<div className={styles.copyright}>© 2024 Unikid</div>
		</>
	)
}

export default Footer
