import { FC } from 'react'
import styles from './Header.module.scss'
import HeaderContacts from '@/widgets/header/ui/contacts/HeaderContacts'
import HeaderProfile from '@/widgets/header/ui/profile/HeaderProfile'
import HeaderNav from '@/widgets/header/ui/nav/HeaderNav'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<HeaderContacts />
			<HeaderProfile />
			<HeaderNav />
		</header>
	)
}

export default Header
