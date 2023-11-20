import classNames from 'classnames/bind';
import styles from './FreeShipping.module.scss';
import { FreeShippingIcon } from '../../Icons';

const cx = classNames.bind(styles);

function FreeShipping() {
    return (
        <div className={cx('wrapper')}>
          <FreeShippingIcon/>
          <div className={cx('title')}>
             <div className={cx('main-title')}>Free Shipping</div>
             <div className={cx('description')}>For orders from %50</div>
          </div>
        </div>
    );
}

export default FreeShipping;
