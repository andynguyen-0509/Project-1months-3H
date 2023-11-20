import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import styles from './NavItem.module.scss';

const cx = classNames.bind(styles);

function NavItem({ data }) {
    let Icon = data.icon;
    return (
            
        <NavLink className={(nav) => cx('wrapper', { active: nav.isActive })} to={data.route}>
            <Icon/>
            <span className={cx('title')}>{data.title}</span>
        </NavLink>
       
    );
}

NavItem.propTypes = {
    data: PropTypes.object,
};

export default NavItem;
