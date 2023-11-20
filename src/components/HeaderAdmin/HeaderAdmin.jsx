import classNames from 'classnames/bind';
import styles from './HeaderAdmin.module.scss';
import { MenuIcon } from '../Icons';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import NotificationBadge from '../NotificationBadge';
import AvartarDropdown from '../AvartarDropdown';

const cx = classNames.bind(styles);

function HeaderAdmin({handleSetLogin}) {
    const notifications = ['Thông báo 1', 'Thông báo 2', 'Thông báo 3'];
    return (
        <header className={cx('wrapper')}>
              <div className={cx('search')}>
                 <MenuIcon/>
                 <TextField
                    sx ={{width:'80%',
                    '& .MuiInputBase-root':{
                        background: "#E5E5E5",
                        height: "35px",
                        fontSize:"1vw",
                        fontWeight: "400"
                    }
                
                }}
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment>
                            <SearchIcon sx={{width:"1.5vw",height:"1.5vw",marginRight:"10px"}} />
                        </InputAdornment>
                    ),
                }}
                />
              </div>
              <div className={cx('account')}>
                <NotificationBadge badgeContent={notifications.length} notifications={notifications} />
                <div className ={cx('user')}>
                  <AvartarDropdown/>
                  <div className={cx('user-info')}>
                        <span className={cx('user-name')}> Nam Nguyễn</span>  
                        <span className={cx('user-role')}> Admin</span>  
                  </div>
                </div>
                
              </div>
            
        </header>
    );
}

export default HeaderAdmin;
