import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Image } from '../Images';
import { AddToCartIcon } from '../Icons';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { NavLink } from 'react-router-dom';
import { addProduct } from '../../redux/cart';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function Product({name, id, price, discount, status, rating, img}) {
    const productUrl = `/product?id=${id}`;
    const [addedToCart, setAddedToCart] = useState(false);

    const handleProductDetail = () =>{
       
    }
    const dispatch = useDispatch();
    const productClass = cx('wrapper', {
        'product-bounce': addedToCart,
      });
    const handleAddToCart = () => {
        const productData = {
          id: id,
          name: name, 
          price: price, 
          quantity: 1, 
          url: img
        };
      
        dispatch(addProduct(productData));

        setAddedToCart(true);
        setTimeout(() => {
          setAddedToCart(false);
        }, 500);
       }
    return (
       
        <div className={cx('wrapper')} >
            <div className = {cx('image')}>
            <NavLink className={productClass} to={productUrl} onClick={handleProductDetail}>
                <Image src = {img} width="100%" height ="100%" />
            </NavLink>     
            </div>
                   
           <div className={cx('name')}>
               {name}
           </div>
           <div className={cx('id')}>
              ID: {id}
           </div>
           <div className={cx('rating-discount')}>
                    <Rating
                            sx={{fontSize:'1vw'}}
                            name="customized-color"
                            value={rating}
                            precision={0.5} // 
                            readOnly
                            icon={<StarIcon style={{ color: 'gold' , fontSize:'1vw',}} />} 
                        />
                 <div className={cx('discount')}> {discount}% Off</div>
           </div>
           <div className={cx('price-cart')}>
                 <div className={cx('price')}>$ {price}.00 </div>
                 <div className={cx('add-btn')} onClick = {handleAddToCart}>
                     <AddToCartIcon  />
                 </div>
                
           </div>
           <div className={cx('status')}>
            {status}
           </div>
        </div>
    
    );
}


export default Product;
