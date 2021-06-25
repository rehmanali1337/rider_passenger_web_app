import React from 'react'
import MainContainer from '../components/MainContainer'
import LoginForm from '../components/LoginForm'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	form: {
		marginLeft: 'auto',
		textAlign: 'center'
	}
})


export const Login = () => {
	const styles = useStyles()
	return (
		<div className={styles.form}>
			<MainContainer>
				<div>
					<LoginForm />
				</div>
			</MainContainer>
		</div>
	)
}
