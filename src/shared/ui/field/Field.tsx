import { forwardRef } from 'react'
import { IField } from './field.interface'

import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ type = 'text', style, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={styles.input}
				style={style}
				{...rest}
			/>
		)
	}
)

Field.displayName = 'Field'

export default Field
