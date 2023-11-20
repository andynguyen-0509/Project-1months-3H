import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import NavList from '../NavList';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            
            <NavList />

        </div>
    );
}

export default Sidebar;
