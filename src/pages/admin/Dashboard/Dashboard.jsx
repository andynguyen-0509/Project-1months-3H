import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

function AdminDashboard() {
    

 
    return (
        <div className={cx('wrapper')}>
           
           <div className={cx('best-seller')}>
                    <div className={cx('title')}>
                        <div className={cx('title-text')}>
                        BestSellers
                        </div>
                        <button className={cx('show-button')}>
                                Show more...
                        </button>
                    </div>
                      
                           
              
           </div>
            
      
        </div>
    );
}

export default AdminDashboard;
