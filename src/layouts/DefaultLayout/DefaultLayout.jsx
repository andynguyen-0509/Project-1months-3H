import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import LoginForm from '../../components/Form/LoginForm/LoginForm';
import { useState } from 'react';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [login,setLogin]  = useState(false);
    const [filterStyle,setFilterStyle] = useState({filter: "blur(0px)"})
    function handleSetLogin (){
        setLogin(!login)
    }
    return (
        <div className={cx('layout')}>
             <div className={cx('wrapper')}  style={filterStyle }>
                    <div className={cx('header')}>
                        <Header handleSetLogin = {handleSetLogin}/> 
                    </div>
                    
                    <div className={cx('content')}>
                        {children}
                    </div>
            </div>
          {  !login ? (    
            <div className={cx('login-container')}>
                <LoginForm handleSetLogin = {handleSetLogin} />
            </div>)
            : ''}

        </div>
        
    );
 
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
