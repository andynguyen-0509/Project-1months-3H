import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchProducts } from '../../redux/product/logic';

const useApiSearchProducts = (keyword) => {
    const dispatch = useDispatch();
    const { searchProducts } = useSelector((state) => state.products);
    const productSearchKey = useSelector((state) => state.products.productSearchKey);
    useEffect(() => {
        
        dispatch(getSearchProducts(productSearchKey));
    }, [dispatch]);

    return { searchProducts };
};

export default useApiSearchProducts;