import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentProducts } from '../../redux/product/logic';

const useApiCurrentProducts = (productId) => {
    const dispatch = useDispatch();
    const { currentProduct, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getCurrentProducts(productId));
    }, [dispatch]);

    return { currentProduct, loading };
};

export default useApiCurrentProducts;
