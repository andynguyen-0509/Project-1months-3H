import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ResetPasswordForm.module.scss';
import InputText from '../../InputText/InputText';
import Logo from '../../Logo/Logo';
import { CloseIcon } from '../../Icons';
import LoginForm from '../LoginForm';


const cx = classNames.bind(styles);

function ResetPasswordForm({handleSetLogin}) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [login, setLogin] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const handleCloseForm = () => {
    setIsFormOpen(!isFormOpen);
};
  const handleEmailChange = (newEmail) => {
      setEmail(newEmail);
  };
  const handleCodeChange = (code) => {
    setCode(code);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the login data (email and password)
  };

    return (
      !login ? (
        isFormOpen && (
        <div className={cx('wrapper')} >
          <div className={cx('left-part')}>
            <div className={cx('title')}> Welcome to Shop App   </div>
            <div className={cx('sub-title')}>Please enter your email to reset password</div>
              <div className={cx('login-form')}>
                  <form onSubmit={handleSubmit}>
                  <InputText
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email@email.com"
                        width ="296px"
                    />
                  <div className={cx('password-container')}>
                    <InputText
                          value={code}
                          onChange={handleCodeChange}
                          placeholder="Code"
                          width ="296px"
                      /> 
                    
                  </div>
                  
                    <button type="submit" className={cx('login-button')}>
                            Reset Password
                    </button>

                    <div className={cx('login')} onClick={()=>{setLogin(true)}}>
                   Login
                    </div>
                  </form>
                              
              </div>
          </div>
          <div className={cx('logo-form')}>
           
            <div className={cx('close-btn')} onClick={handleCloseForm}>
            <CloseIcon/>
            </div>
            <Logo/>
          </div>      
        </div>
    )
      )
    : <LoginForm handleSetLogin = {handleSetLogin}/>
    )
}

export default ResetPasswordForm;
