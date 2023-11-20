import classNames from 'classnames/bind';
import styles from './ShoppingCart.module.scss';
import QuantityModifier from '../QuantityModifier/QuantityModifier';
import { Image } from '../Images';
import { useSelector } from 'react-redux';


const cx = classNames.bind(styles);

function ShoppingCart() {
    const Order = useSelector ( (state) => state.cart);
    
    if (Order['products'].length ==0){
        window.location.href = '/';
    }
   
    return (
        <div className={cx('container')}>
        
        <div className={cx('order-list')}>
                     
                { Order['products'].map((order, index) => (
                    <div key={index} className={cx('order-item')}>
                        <div className={cx('order-detail')}>
                        <Image src= {order.url} width='150px' height='150px'/>
                        <div className={cx('order-name')}> 
                          {order.name}
                        </div>
                        <div className={cx('order-price')}> 
                          $ {order.price}
                        </div>
                        <div className={cx('order-quantity')}>
                            <QuantityModifier initialQuantity = {parseInt(order.quantity)} action="Remove product"/>
                        </div>
                        </div>
                        <Image src="src\assets\images\LineTable.png"/>
                    </div>
                ))}
            </div>  
           
        </div>
    );
}

export default ShoppingCart;
