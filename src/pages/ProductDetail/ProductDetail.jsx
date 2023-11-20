import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Image } from '../../components/Images';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { LineIcon } from '../../components/Icons';
import ColorSelection from '../../components/ColorSelection/ColorSelection';
import QuantityModifier from '../../components/QuantityModifier/QuantityModifier';
import ProductReview from '../../components/ProductReview/ProductReview';
import Skeleton from '@mui/material/Skeleton';
import { useLocation } from 'react-router-dom';
import useApiCurrentProducts from '../../components/customHook/useApiCurrentProduct';
const cx = classNames.bind(styles);

function ProductDetail() {
    
    const navigation = `Home > Shoe > Adidas Shoe`
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id');
    const {currentProduct, loading} = useApiCurrentProducts(productId);
    const {product, reviews} = currentProduct;
   
    return (
        product ? (
        <div className={cx('wrapper')}>
            <div className={cx('navigation')}>
                     {navigation}
            </div>
            <div className={cx('product-detail')}>
                <div  className={cx('product-image')}>
                   <Image src= {product.images[0].url} width="100%" height="100%"/>
                </div>
             
                <div className={cx('product-info')}>
                    <div className={cx('name')}>
                       {product.name}
                    </div>
                    <div className={cx('rating-review-sold')}>
                         <div className={cx('rating')}>
                         <Rating
                            name="customized-color"
                            value={product.rating}
                            precision={0.5} // 
                            readOnly 
                            icon={<StarIcon style={{ color: 'gold' }} />} 
                        />
                         </div>

                         <LineIcon/>

                         <div className={cx('review')}>
                             {product.numOfReviews} reviews
                         </div>

                         <LineIcon/>

                         <div className={cx('sold')}>
                            3k sold
                         </div>
                    </div>

                    <div className={cx('description')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in 
                    ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi
                    </div>
                    <div className={cx('status-brand-sku')}>
                        <div className={cx('status')}>
                            Availability: 
                            <span className={cx('stock')}>In Stock</span>
                        </div>
                        <div className={cx('brand')}>
                            Brand: {product.brand}
                        </div>
                        <div className={cx('sku')}>
                            SKU: {product.countInStock}
                        </div>
                    </div>
                    <div className={cx('price-discount')}>
                        <div className={cx('price')}>
                            $ {product.price}
                        </div>
                        <div className={cx('discount')}>
                            50% Off
                        </div>
                    </div>
                    <div className={cx('color')}>
                       <div className={cx('color-text')}> Select Color:</div> 
                        <ColorSelection colors ={['red', 'blue', 'green']} />
                    </div>
                    <div className={cx('quantity')}>
                        <div className={cx('quantity-text')}>Quantity:</div>
                        <QuantityModifier action="Add to cart" product ={product} />
                    </div>
                </div>
            </div>
          <div className={cx('review')}>
                <ProductReview reviews = {reviews}/>
          </div>
           
            
        </div> )
        :
                            <div className = {cx('loading-product')}>
                                <div>
                                <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
                                <Skeleton variant="text" animation="wave" width={210} />
                                <Skeleton variant="text" animation="wave" width={210} />
                                </div>
                            </div>
    );
}

export default ProductDetail;
