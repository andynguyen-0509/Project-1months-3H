import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import TopBar from '../TopBar/TopBar';
import MainBar from '../MainBar/MainBar';

const cx = classNames.bind(styles);

function Header({handleSetLogin}) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('main-bar')}>
               <MainBar handleSetLogin = {handleSetLogin}/>
            </div>
        </header>
    );
}

export default Header;
