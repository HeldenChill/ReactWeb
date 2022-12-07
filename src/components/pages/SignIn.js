import React from 'react'
import Button from '../Button'
import './SignIn.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { checkValidAccount,selectorCheckAccount } from '../../features/CheckAccount'

const SignIn = () => {
	const successNotify = 'Sign In Successfully!'
	const failNotify = 'Your account or password is incorrect, if you do not have an account, please contact the management!'

	const dispatch = useDispatch()
	const accountState = useSelector(selectorCheckAccount);

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isDirty, setIsDirty] = useState(true)

	const ProcessCheckingAccount = () => {	
			dispatch(checkValidAccount({
				username: username,
				password: password
			}))
			setIsDirty(false)							
	}

	const UpdateInput = (e, setData) =>{
		setData(e.target.value)
		setIsDirty(true)
	}

	//#region JSX
	let Notification;
	if(isDirty){
		Notification = <></>
	}
	else{
		Notification = <label style={{color: accountState.isCorrect ? 'blue' : 'red'}}>
							{accountState.isCorrect ? successNotify : failNotify}
						</label>	
	}
	//#endregion

  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
				<form className="login100-form validate-form flex-sb flex-w">
					<span className="login100-form-title p-b-32">
						Account Login
					</span>

					<span className="txt1 p-b-11">
						Username
					</span>
					<div className="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
						<input className="input100" type="text" name="username" onInput={e => UpdateInput(e, setUsername)}/>
						<span className="focus-input100"></span>
					</div>
					
					<span className="txt1 p-b-11">
						Password
					</span>
					<div className="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
						<span className="btn-show-pass">
							<i className="fa fa-eye"></i>
						</span>
						<input className="input100" type="password" name="pass" onInput={e => UpdateInput(e, setPassword)}/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="flex-sb-m w-full p-b-48">
						<div>				
							{Notification}
						</div>
					</div>
                    <Button 
					link = '/sign-in'
					buttonStyle='btn--outline' 
					buttonSize='btn--large' 
					buttonColor='white' 
					onClick={
						() => ProcessCheckingAccount()		
					}
					> 
						Sign In
					</Button>
				</form>
			</div>
		</div>
	</div>
  )
}
export default SignIn