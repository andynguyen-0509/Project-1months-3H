import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ReviewBox.module.scss';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import { Pagination } from '@mui/material';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const cx = classNames.bind(styles);

function ReviewBox( {reviews}) {
    console.log(reviews);
    const userReviews = reviews.result;

    const itemsPerPage = 3; 
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userReviews.slice(indexOfFirstItem, indexOfLastItem);
    const [rating, setRating] = useState(0);

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>Customer Review</div>
            <div className={cx('reviews')}>
                {currentItems.map((review, index) => (
                    <ReviewDetail
                        key={index}
                        username={review.userReview['username']}
                        rating={review.rating}
                        comment={review.content}
                        date={review.createAt}
                        image = {review.userReview['avatar']}
                    />
                ))}
            </div>
            <div className={cx('pagination')}>
            <Pagination
                sx ={{
                    '& .MuiPaginationItem-root': {
                        borderRadius: '4px',
                        border: '1px solid #DFE3E8',
                        background: '#DFE3E8',
                        fontSize: '1vw',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        '@media (max-width: 768px)':{
                            fontSize:'2vw',
                        }
                        
                    }
                }}
                count={Math.ceil(userReviews.length / itemsPerPage)} 
                page={currentPage}
                onChange={handlePageChange} 
                variant="outlined"
                shape="rounded"
                color="primary"
            />
            </div>

            <div className={cx('write-comment')}>
               <div className={cx('comment-title')}>
                  Write Review
               </div>
               <div className={cx('rating-input')}>
               <Rating
                sx={{
                    fontSize: '1.5vw', 
                }}
                name="customized-color"
                value={rating}
                precision={0.5}
                onChange={handleRatingChange}
                icon={<StarIcon style={{
                    fontSize:'1.5vw',
                    color: 'gold' 
                
                }} />}
            />
               </div>
               <TextareaAutosize
                minRows={1} // 
                maxRows={6} // 
                placeholder="Write your review..."
                style={{ 
                    width: "60vw",
                    height:"10vw",
                    borderRadius: "5px",
                    border: "1px solid #6A6A6A",
                    background: "#E6E6E6",
                    paddingTop:"0.8vw",
                    paddingLeft:"0.8vw",
                    fontSize:"1vw",
            }} 
            />
            </div>
            <button className={cx('post-btn')}>
                           Post your comment
                    </button>
        </div>
    );
}

export default ReviewBox;
