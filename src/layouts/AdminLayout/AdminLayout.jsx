import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import PropTypes from 'prop-types';
import LoginForm from '../../components/Form/LoginForm/LoginForm';
import SideBarAdmin from '../../components/SideBarAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';
const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    const login = true;
    function handleSetLogin (){
        setLogin(!login)
    }
    return (
        <div className={cx('layout')}>
             <div className={cx('wrapper')} >
                    <div className={cx('side-bar')}>
                            <SideBarAdmin/>
                    </div>
                    <div className={cx('content')}>
                        <HeaderAdmin/>
                        <div className={cx('detail-page')}>
                             {children}
                        </div>
                      
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

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;
