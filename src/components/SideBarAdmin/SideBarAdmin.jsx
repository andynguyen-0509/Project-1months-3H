import classNames from 'classnames/bind';
import styles from './SideBarAdmin.module.scss';
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/Category';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import routes from '../../config/adminSideBar';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function SideBarAdmin() {
    const location = useLocation();
    const { pathname } = location;
    const pathParam = pathname.substring(pathname.indexOf('/admin') + 7);
    const [open, setOpen] = useState(true);
    const [productOpen, setProductOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const [orderOpen, setOrderOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const selectedItem = Object.keys(routes).find(key => routes[key].url === pathParam);
        setSelectedItem(selectedItem);
    }, [pathParam]);

    const handleItemClick = (itemName, itemUrl) => {
        setSelectedItem(itemName);
        window.history.pushState({}, null, itemUrl);
    };

    const handleProductClick = () => {
        setProductOpen(!productOpen);
    };

    const handleUserClick = () => {
        setUserOpen(!userOpen);
    };

    const handleOrderClick = () => {
        setOrderOpen(!orderOpen);
    };

    const renderListItem = (itemName, itemUrl) => (
        itemName === 'dashboard'?
        <ListItem
        className={cx('sidebar-item', { 'selected': selectedItem === itemName })}
        onClick={() => handleItemClick(itemName, itemUrl)}
    >
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        {routes[itemName].title}
    </ListItem>
        :
        <div   className={cx('sidebar-child-item')}>
        <ListItem
            className={cx('sidebar-child-item', { 'selected': selectedItem === itemName })}
            onClick={() => handleItemClick(itemName, itemUrl)}
        >
              <ListItemIcon>
                <CategoryIcon/>
              </ListItemIcon>
            {routes[itemName].title}
        </ListItem>
        </div>
       
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('shop')}>
                <div className={cx('shop-name')}>SHOP APP</div>
                <div className={cx('admin-title')}>ADMIN</div>
            </div>
            <div className={cx('application')}>APPLICATION</div>
            <div className={cx('navigation')}>
                <Divider />
                <List>
                    {renderListItem('dashboard', routes.dashboard.url)}
                    <ListItem
                        onClick={handleProductClick}
                        className={cx('sidebar-item', { 'selected': selectedItem === 'product' })}
                    >
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        {routes.product.title}
                        {productOpen ? <ExpandLessIcon className={cx('expand-icon-right')}/> : <ExpandMoreIcon className={cx('expand-icon-right')} />}
                    </ListItem>
                    {productOpen && (
                        <>
                            {renderListItem('productList', routes.productList.url)}
                            {renderListItem('productDetail', routes.productDetail.url)}
                        </>
                    )}

                    <ListItem
                        onClick={handleUserClick}
                        className={cx('sidebar-item', { 'selected': selectedItem === 'user' })}
                    >
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        {routes.user.title}
                        {userOpen ? <ExpandLessIcon className={cx('expand-icon-right')} /> : <ExpandMoreIcon className={cx('expand-icon-right')}/>}
                    </ListItem>
                    {userOpen && (
                        <>
                            {renderListItem('userList', routes.userList.url)}
                            {renderListItem('userDetail', routes.userDetail.url)}
                        </>
                    )}

                    <ListItem
                        onClick={handleOrderClick}
                        className={cx('sidebar-item', { 'selected': selectedItem === 'order' })}
                    >
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        {routes.order.title}
                        {orderOpen ? <ExpandLessIcon className={cx('expand-icon-right')}/> : <ExpandMoreIcon className={cx('expand-icon-right')}/>}
                    </ListItem>
                    {orderOpen && (
                        <>
                            {renderListItem('orderList', routes.orderList.url)}
                            {renderListItem('orderDetail', routes.orderDetail.url)}
                        </>
                    )}
                </List>
            </div>
        </div>
    );
}

export default SideBarAdmin;
