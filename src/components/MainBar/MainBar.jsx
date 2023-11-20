import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from '../Images';
import styles from './MainBar.module.scss';
import classNames from 'classnames/bind';
import InputText from '../InputText/InputText';
import { SearchIcon, UserIcon } from '../Icons';

const NAVIGATION = {
  COMPANY: 'Công ty',
  PRODUCT: 'Sản phẩm',
  BENEFIT: 'Phúc lợi',
  JOB: 'Tuyển dụng',
  ACTIVITY: 'Hoạt động',
  BLOG: 'Blog',
};
const cx = classNames.bind(styles);

function MainBar({ handleSetLogin }) {
  const [selectedTab, setSelectedTab] = useState(NAVIGATION.COMPANY);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={cx('main-bar')}>
        <div className={cx('logo-image')}>
          <Image src="/SKYlogo.png" width="80px" height="68px" />
        </div>
        <div className={cx('navigation-bar')}>
        {Object.values(NAVIGATION).map((tab,index) => (
          <div
            key={index}
            to={`/${tab.toLowerCase()}`}
            onClick={() => handleTabClick(tab)}
            className={cx('nav-link',{
              'selected': selectedTab === tab 
            })}
          >
            {tab}
          </div>
        ))}
        </div>
        <div className={cx('search-bar')}>
          <input
             className={cx('search-input')}
             placeholder={'Tìm kiếm'}
          />
          <SearchIcon className={cx('search-icon')}/>
      </div>
     </div>
  );
}

export default MainBar;
