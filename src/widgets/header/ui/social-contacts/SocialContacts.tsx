import styles from './SocialContacts.module.scss'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF, FaTelegram } from 'react-icons/fa'
import { FC } from 'react'

const SocialContacts: FC = () => {
	return (
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
	)
}

export default SocialContacts
