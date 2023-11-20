import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useState } from 'react'; 
import styles from './NewPermission.module.scss';
import MuiAlert from '@mui/material/Alert';

const cx = classNames.bind(styles);

function NoPermission() {
  
    const [open, setOpen] = useState(true);
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className={cx('wrapper')}>
   
      <div className={cx('container')}>
      {open && (
          <MuiAlert   
          className={cx('alert')}
          elevation={6}
          variant="filled"
          severity="error"
          onClose={handleClose}
          >
            No Permission: You do not have permission to access this page.
          </MuiAlert>
         )}
        <h2 className={cx('title')}>No Permission</h2>
        <p className={cx('message')}>
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
}

export default NoPermission;
