import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductReview.module.scss';
import ReviewBox from '../ReviewBox/ReviewBox';
import { Image } from '../Images';

const cx = classNames.bind(styles);

function ProductReview({reviews}) {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [activeSelection, setActiveSelection] = useState('Description'); // Mặc định hiển thị "Description"
    const selections = [
        { title: 'Description', status: 'Active' },
        { title: 'Review', status: 'Unactive' },
    ];
    console.log(reviews);
    const handleSelectionClick = (index, title) => {
        setSelectedIdx(index);
        setActiveSelection(title); // Thay đổi trạng thái hiện tại thành tên tương ứng
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('selection-bar')}>
                {selections.map((selection, index) => {
                    const isActive = index === selectedIdx;
                    const selectionClassName = cx('selection', {
                        active: isActive,
                    });
                    return (
                        <div
                            key={index}
                            className={selectionClassName}
                            onClick={() => handleSelectionClick(index, selection.title)}
                        >
                            {selection.title}
                        </div>
                        
                    );
                })}
            </div>
            <Image src = "LineTable" width="100%"/>
            <div className={cx('content')}>
                {activeSelection === 'Description' && (
                    <div>
                        {/* Hiển thị nội dung cho Description */}
                        <p>This is the description.</p>
                    </div>
                )}
                {activeSelection === 'Review' && (
                    <div>
                        {/* Hiển thị nội dung cho Review */}
                       <ReviewBox reviews = {reviews}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductReview;
