import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import { TextField, InputAdornment } from '@mui/material';
import { SearchIcon } from '../../../components/Icons';
import TableRoom from '../../../components/Table/Table';
const cx = classNames.bind(styles);

function AdminProductList() {
    

 
    return (
        <div className={cx('wrapper')}>
           
                   <div className={cx('navigation')}>
                     Product / Product List
                   </div>
                   <div className={cx('product-title')}>
                      <div className={cx('title-text')}> Product</div>
                      <button className={cx('add-btn')} type = 'button'>Add product</button>
                   </div>
                 <div className={cx('product-content')}>
                            <div className={cx('search')}>
                            
                            <TextField
                                sx ={{width:'90%',
                                '& .MuiInputBase-root':{
                                    height: "40px",
                                    fontSize:"1.2vw",
                                    fontWeight: "400",
                                    color:"#929395",
                                    fontWeight: "400"
                                }
                            
                            }}
                                placeholder="Search products"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment>
                                        <SearchIcon sx={{width:"1vw",height:"1vw",marginRight:"20px"}} />
                                    </InputAdornment>
                                ),
                            }}
                            />
                            </div>
                            <div className={cx('product-table')}>
                                   <TableRoom/>  
                            </div>
                </div>
               
                 
            
        </div>
    );
}

export default AdminProductList;
