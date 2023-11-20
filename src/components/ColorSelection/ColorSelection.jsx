import React from 'react'; // Import React
import classNames from 'classnames/bind';
import styles from './ColorSelection.module.scss';

const cx = classNames.bind(styles);

function ColorSelection({ colors }) { 
    return (
        <div className={cx('color-selection')}>
            {colors.map((color, index) => (
                <div className={cx('color-box')} style={{border:`1px solid ${color}` }}>
                <div
                    key={index} 
                    className={cx('color')}
                    style={{ 
                        backgroundColor: color, 
                        width: '1.5vw', 
                        height: '1.5vw',
                        borderRadius: '50%',
                        '@media (max-width: 768px)': {
                            width: '4vw', 
                            height: '4vw',
                        }, 
                    
                    }}
                >
            
                </div>  
                </div>
                
            ))}
        </div>
    );
}

export default ColorSelection;
