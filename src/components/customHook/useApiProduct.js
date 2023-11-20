import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/product/logic';

const useApiProducts = (currentPage) => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts(currentPage-1));
    }, [dispatch, currentPage]);
    
    return { products, loading };
};

export default useApiProducts;
