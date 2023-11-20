import classNames from 'classnames/bind';

import styles from './NavList.module.scss';
import config from '../../config'
import { RoomIcon, BacklogIcon, SettingIcon, MenuBarIcon } from '../Icons';
import NavItem from '../NavItem';

const cx = classNames.bind(styles);

const navigations = [

    {
        icon: RoomIcon,
        title: 'Computer',
        route: config.routes.room,
    },
    {
        icon: BacklogIcon,
        title: 'Hand Tools',
        route: config.routes.setting,
    },
    {
        icon: SettingIcon,
        title: 'Machine Tools',
        route: config.routes.setting,
    },
    {
        icon: SettingIcon,
        title: 'Power Tools',
        route: config.routes.setting,
    },
    {
        icon: SettingIcon,
        title: 'Clothes & PRE',
        route: config.routes.setting,
    },
    {
        icon: SettingIcon,
        title: 'Electrical',
        route: config.routes.setting,
    },
    {
        icon: SettingIcon,
        title: 'Building Tools',
        route: config.routes.setting,
    },
    {
        icon: SettingIcon,
        title: 'Foods',
        route: config.routes.setting,
    },
    {
        icon: SettingIcon,
        title: 'Drinks',
        route: config.routes.setting,
    },
];

function NavList() {

    return (
        <div className={cx('wrapper')}>
            <div className= {cx('title')}>
                
                <MenuBarIcon/>
               
                Categories 
                
            </div>
            {navigations.map((nav, index) => (
               
                <NavItem key={index} data={nav}/>
              
            ))}
        
        </div>
    );
}

export default NavList;
