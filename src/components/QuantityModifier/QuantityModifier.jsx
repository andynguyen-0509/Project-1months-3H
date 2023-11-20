import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './QuantityModifier.module.scss';
import { AddProductToCartIcon} from '../Icons';
import { addProduct } from '../../redux/cart';

const cx = classNames.bind(styles);
function QuantityModifier({action, initialQuantity, product}) {
    const [quantity, setQuantity] = useState(!initialQuantity ? 1: initialQuantity);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleInputChange = (e) => {
           
            setQuantity(parseInt(e.target.value));
    };
    const handleAddProductToCart = ( )=>{
        setQuantity(1);
        const productData = {
          ...product,
          url:product.images[0].url,
          quantity: quantity,
          };
          dispatch(addProduct(productData));
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('quantity')}>
                <IconButton onClick={handleDecrease} sx={{color: '#33A0FF'}}>
                    <RemoveIcon />
                </IconButton>
                <TextField
                    sx ={{
                        '& .MuiInputBase-root': {
                            width: '8vw',
                            fontSize: '1vw',
                            height: '2.5vw',
                            paddingLeft:'1vw',
                            '@media (max-width: 768px)': {
                                width: '16vw', 
                                height: '5vw',
                                fontSize: '2vw'
                            },

                    },
                        
                    }}
                    type="number"
                    value={quantity}
                    onChange={handleInputChange}
                  
                    
                />
                <IconButton onClick={handleIncrease} sx={{color: '#33A0FF'}}>
                    <AddIcon />
                </IconButton>
            </div>   
            <button className={cx('cart-button')} onClick={handleAddProductToCart}>
                          <AddProductToCartIcon />
                           {action}
                    </button>
            
            

        </div>
    );
}

export default QuantityModifier;
