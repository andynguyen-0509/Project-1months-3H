import classNames from 'classnames/bind';
import styles from './SearchProduct.module.scss';
import { Image } from '../../components/Images';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useApiSearchProducts from '../../components/customHook/useApiSearchProduct';
const cx = classNames.bind(styles);

function SearchProduct() {
    const productSearchKey = useSelector((state) => state.products.productSearchKey);
    const { searchProducts} = useApiSearchProducts(productSearchKey);
    console.log(searchProducts);
    return (
        <div className={cx('wrapper')}>
            {productSearchKey}
    
        </div>
    );
}

export default SearchProduct;
