import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NewAccountForm.module.scss';
import InputText from '../../InputText/InputText';
import Logo from '../../Logo/Logo';
import { CloseIcon } from '../../Icons';
import LoginForm from '../LoginForm/LoginForm';


const cx = classNames.bind(styles);

function NewAccountForm({handleSetLogin}) {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);

  const handleEmailChange = (newEmail) => {
      setEmail(newEmail);
  };
  const handleCloseForm = () => {
    setIsFormOpen(!isFormOpen);
};
  const handleUserNameChange = (newUser) => {
    setUserName(newUser);
};
  const handlePasswordChange = (newPassword) => {
      setPassword(newPassword);
  };
  const handleConfirmPasswordChange = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
};
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleRegister =()=>{
    localStorage.setItem(
   {   user:
    {
      username : userName,
      password : password,
      email : email,
    }
  }
    )
  }
    return (
    !login ? (
      isFormOpen && (
        <div className={cx('wrapper')} >
            <div className={cx('logo-form')}>
                <Logo/>
            </div>  

            <div className={cx('right-part')}>
                <div className={cx('close-btn')} onClick={handleCloseForm}>
                    <CloseIcon />
                </div>
              <div className={cx('title')}> Welcome to Shop App   </div>
                <div className={cx('login-form')}>
                  <form onSubmit={handleRegister}>
                  <InputText
                        value={userName}
                        onChange={handleUserNameChange}
                        placeholder="Username"
                        width ="296px"
                        mt ="10px"
                    />
                  <InputText
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email@email.com"
                        width ="296px"
                        mt = "10px"
                    />
                  <div className={cx('password-container')}>
                    <InputText
                          value={password}
                          onChange={handlePasswordChange}
                          type = {showPassword? 'text' : 'password'}
                          placeholder="Password"
                          width ="266px"
                          mt = "10px"
                      /> 
                       <div  className={cx('forgot-password')} onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? 'Hide' : 'Show'}
                        </div>
                  </div>
                      <InputText
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          placeholder="Confirm Password"
                          width ="296px"
                          mt ="10px"
                      /> 
                  
                    <button type="submit" className={cx('login-button')} onClick={handleRegister}> 
                            Register
                    </button>

                    <div className={cx('login')} onClick={()=>{setLogin(true)}}>
                        Login
                    </div>
                  </form>
                              
              </div>
          </div>
             
        </div>
    ))
    : <LoginForm handleSetLogin={handleSetLogin}/> 
    )
    
}

export default NewAccountForm;
