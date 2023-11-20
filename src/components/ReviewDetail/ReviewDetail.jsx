import classNames from 'classnames/bind';
import styles from './ReviewDetail.module.scss';
import { Image } from '../Images';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const cx = classNames.bind(styles);

function ReviewDetail({username, rating, comment, date, image}) {

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <Image src = {image} width="50vw"  height="50vw"/>
                <div className={cx('content')}>
                    <div className={cx('name')}>{username}</div>
                    <div className={cx('rating')}>
                            <Rating
                                name="customized-color"
                                value={rating}
                                precision={0.5} // 
                                readOnly 
                                icon={<StarIcon style={{ color: 'gold' }} />} 
                            />
                            </div>
                    <div className={cx('comment')}>
                            {comment}
                    </div>
                    <div className={cx('date')}>
                            {date}
                    </div>
                  
                </div>
            </div>
            <Image src = "LineTable" width="100%"/>
           
        </div>
    );
}

export default ReviewDetail;
