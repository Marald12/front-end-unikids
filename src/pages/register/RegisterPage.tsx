'use client'
import { FC } from 'react'
import styles from './RegisterPage.module.scss'
import Field from '@/shared/ui/field/Field'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailValidate } from '@/shared/utils/email.validate'
import Button from '@/shared/ui/button/Button'
import { authApi } from '@/shared/api/auth/auth.api'
import { setCookie } from 'cookies-next'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import ButtonNoSolid from '@/shared/ui/button-no-solid/ButtonNoSolid'
import { IRegisterDto } from '@/pages/register/registerPage.inteface'

const RegisterPage: FC = () => {
	const router = useRouter()
	const { register, handleSubmit, formState } = useForm<IRegisterDto>({
		mode: 'onChange'
	})

	const clickHandler = () => {
		if (formState.errors) {
			if (formState.errors.email) toast.error(formState.errors.email.message)
			if (formState.errors.password)
				toast.error(formState.errors.password.message)
			if (formState.errors.repeatPassword)
				toast.error(formState.errors.repeatPassword.message)
			if (formState.errors.name) toast.error(formState.errors.name.message)
		}
	}

	const submitHandler: SubmitHandler<IRegisterDto> = async data => {
		try {
			if (data.password !== data.repeatPassword)
				return toast.error('Пароли не совпадают')
			const authData = await authApi.register(data)

			setCookie('token', authData.token)
			toast.success('Регистрация прошла успешна')
			router.push('/')
		} catch (e: any) {
			toast.error(e.response.data.message)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.login}>
				<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
					<h1>Зарегистрироваться</h1>
					<Field
						placeholder='E-mail'
						type='email'
						{...register('email', {
							pattern: {
								value: emailValidate,
								message: 'E-mail не валидный'
							},
							maxLength: {
								value: 32,
								message: 'Максимальная длинна E-mail 32 символа'
							},
							required: {
								value: true,
								message: 'Поле E-mail пустое'
							}
						})}
					/>
					<Field
						placeholder='Имя'
						{...register('name', {
							maxLength: {
								value: 16,
								message: 'Максимальная длинна имени 16 символов'
							},
							minLength: {
								value: 4,
								message: 'Минимальная длинна имени 4 символа'
							},
							required: {
								value: true,
								message: 'Поле имени пустое'
							}
						})}
					/>
					<Field
						placeholder='Пароль'
						type='password'
						{...register('repeatPassword', {
							maxLength: {
								value: 32,
								message: 'Максимальная длинна пароля 32 символа'
							},
							minLength: {
								value: 6,
								message: 'Минимальная длинна пароля 6 символов'
							},
							required: {
								value: true,
								message: 'Поле пароль пустое'
							}
						})}
					/>
					<Field
						placeholder='Повторите пароль'
						type='password'
						{...register('password', {
							maxLength: {
								value: 32,
								message: 'Максимальная длинна пароля 32 символа'
							},
							minLength: {
								value: 6,
								message: 'Минимальная длинна пароля 6 символов'
							},
							required: {
								value: true,
								message: 'Поле пароль пустое'
							}
						})}
					/>
					<Button type='submit' onClick={clickHandler}>
						Создать аккаунт
					</Button>
				</form>
			</div>
			<div className={styles.register}>
				<h1>Уже есть аккаунт?</h1>
				<ButtonNoSolid onClick={() => router.push('/login')}>
					Войти
				</ButtonNoSolid>
			</div>
		</div>
	)
}

export default RegisterPage
