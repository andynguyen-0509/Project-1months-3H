import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { LogoIcon } from '../Icons';


const cx = classNames.bind(styles);

function Logo() {

    return (
        <div className={cx('wrapper')} >
           <p>Shop App</p>
           <LogoIcon/>
        </div>
    );
}

export default Logo;
