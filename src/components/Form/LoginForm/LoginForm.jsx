import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import InputText from '../../InputText/InputText';;
import Logo from '../../Logo/Logo';
import { CloseIcon } from '../../Icons';
import NewAccountForm from '../NewAccountForm/NewAccountForm';
import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm';
// import tokens from '../../../mock/jwt.json';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../../../redux/login/logic';
import { resetError } from '../../../redux/login';
import CryptoJS from 'crypto-js';

const cx = classNames.bind(styles);


function LoginForm({handleSetLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createNewAccount, setCreateNewAccount] = useState(false);
  const [changPassword, setChangPassword] = useState(false);
  const error =  useSelector((state) => state.login.error);
  const dispatch = useDispatch();
  const handleEmailChange = (newEmail) => {
      setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
      setPassword(newPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const privateKey = 'zI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyNDI';
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      privateKey
    ).toString();
    const data = {
      email: email,
      password: encryptedPassword,
      deviceId: "1213nk1"
    }
    console.log(data)
    dispatch(postLogin(data))
    // handleSetLogin()
    // localStorage.setItem('access_token', tokens.data.access_token);

    // Do something with the login data (email and password)
  };
  const handleClose = ()=>{
    dispatch(resetError());
    handleSetLogin();
  }
    return (
     
      (!createNewAccount && !changPassword) ? (
        <div className={cx('wrapper')} >
          <div className={cx('left-part')}>
            <div className={cx('title')}> Welcome to Shop App   </div>
              <div className={cx('login-form')}>
                  <form onSubmit={handleSubmit}>
                  <InputText
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email@email.com"
                        width ="100%"
                    />
                  <div className={cx('password-container')}>
                    <InputText
                          value={password}
                          onChange={handlePasswordChange}
                          placeholder="Password"
                          width ="100%"
                      /> 
                    <div className= {cx('forgot-password')} onClick={()=>{setChangPassword(true)}}>
                      Forgot?
                    </div>
                  </div>
                  
                    <button type="submit" className={cx('login-button')}>
                            Login
                    </button>
                    <div className={cx('error-message', { 'visible': error })}>
                          {error}
                    </div>
                    <div className={cx('new-account')} onClick={()=>{setCreateNewAccount(true)}}>
                   Create new account
                    </div>
                  </form>
                
              </div>
          </div>
          <div className={cx('logo-form')}>
           
            <div className={cx('close-btn')} onClick={()=>{handleClose()}}>
            <CloseIcon/>
            </div>
            <Logo/>
          </div>  
            
        </div>
    )
    : 
    ( 
    createNewAccount?
    <NewAccountForm handleSetLogin = {handleSetLogin}/>:
    <ResetPasswordForm handleSetLogin = {handleSetLogin}/>
    )
    )
    
}

export default LoginForm;
