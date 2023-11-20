import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

const cx = classNames.bind(styles);

function Checkout() {
    const [currentStep, setCurrentStep] = useState(0); // Bắt đầu từ bước Shipping

    const process = [
        { title: 'SHOPPING CART'},
        { title: 'SHIPPING' },
        { title: 'PAYMENT'},
    ];

    const handleStepClick = (stepIndex) => {
        
        setCurrentStep(stepIndex);
    };

    return (
        <div className={cx('wrapper')}>
           <div className={cx('order-process')}>Order Process</div> 
            <div className={cx('navigation')}>
                {process.map((step, index) => (
                    <div className={cx('container')}>
                         {index>0 &&
                        <div  className={cx('line',{selectedLine: index <= currentStep,unselectedLine: index > currentStep } )}>
                        </div>
                        }
                    <div
                        key={index}
                        className={cx('step', {
                            selected: index <= currentStep,
                            unselected: index > currentStep,
                        })}
                        onClick={() => handleStepClick(index)}
                    >
                        <div className={cx('step-number', { selectedNumber: index <= currentStep,unselectedNumber: index > currentStep})}>
                            {index+1}
                        </div>
                        <div className={cx('step-title', { selectedTitle: index <= currentStep,unselectedTitle: index > currentStep })}>
                            
                            {step.title}
                        </div>
                       
                    </div>
                   
                    </div>
                ))}
            </div>
            {/* Hiển thị nội dung tương ứng với bước hiện tại */}
             {currentStep === 0 && <ShoppingCart/>}
            {/* {currentStep === 1 && <Shipping />}
            {currentStep === 2 && <Payment />}  */}
        </div>
    );
}

export default Checkout;
