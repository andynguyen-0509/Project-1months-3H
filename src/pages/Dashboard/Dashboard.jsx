import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

import useApiProducts from '../../components/customHook/useApiProduct';

import { useState} from 'react';

const cx = classNames.bind(styles);

const products = [
    
]
function Dashboard() {
    const [currentPage, setCurrentPage] = useState(2);
   
   
    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div className={cx('container')}>
        <div className={cx('wrapper-title')}>
            <div className={cx('title')}>
                <div className={cx('head-title')}>Môi trường sáng tạo cho <br></br> những tài năng trẻ</div>
                <div className={cx('sub-title')}>Phấn đấu hết mình, phá vỡ giới hạn bản thân, vươn tới những ước mơ vĩ đại.</div>
                <div className={cx('title-btn-container')}><button type = 'button' className={cx('title-btn')}>Gia nhập Skyward!</button></div>
            </div>
        </div>
        <div className={cx('introduction')}>
            <div className={cx('text')}>
                <div className={cx('introduction-sub-title')}>Giới thiệu</div>
                <div className={cx('introduction-big-title')}>Chúng tôi là <span> Skyward</span> </div>
                <div className={cx('introduction-detail-title')}>Tiền thân là công ty TMĐT Koisy với 4 năm kinh doanh trong lĩnh <br></br> 
                vực Trang sức đá quý. Với sứ mệnh vươn tầm lên doanh nghiệp <br></br>
                đa quốc gia, mang đến những sản phẩm tốt nhất cho các <br></br>
                khách hàng Việt Nam và quốc tế. Skyward chính thức được<br></br>
                thành lập vào tháng 5/2021</div>
                <div className={cx('introduction-btn-container')}><button type = 'button' className={cx('introduction-btn')}>{`Tìm hiểu về Skyward >`}</button></div>
            </div>   
            <div className={cx('image')}>
            </div>  
        </div>
        <div className={cx('company-staff')}>
                <div className={cx('company-title')}>
                        Bộ máy lãnh đạo công ty
                </div>
                <div className={cx('company-image')}>
                     advfdf
                </div>
                <div className={cx('company-title')}>
                </div>
        </div>
        <div className={cx('main-product')}>
                <div className={cx('product-sub-title')}>
                    Sản phẩm
                </div>
                <div className={cx('product-big-title')}>
                    Các sản phẩm chính
                </div>
                
        </div>
        </div>
    );
}

export default Dashboard;
