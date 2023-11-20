import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopBar.module.scss';

const cx = classNames.bind(styles);

function TopBar() {
    const itemList = ['About us', 'Contact', 'Store', 'Track Orders'];

    return (
        <div className={cx('top-bar')} >
            {itemList.map((item, index) => (
                <div key={index} className={cx('item')}>
                    {item}
                </div>
            ))}
        </div>
    );
}

export default TopBar;
