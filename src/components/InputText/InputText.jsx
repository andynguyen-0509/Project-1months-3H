import React from 'react';
import classNames from 'classnames/bind';
import styles from './InputText.module.scss';

const cx = classNames.bind(styles);

function InputText({value, onChange, placeholder,width,mt,type}) {
    
    return (
        <input
        style={{width: width, marginTop: mt, fontSize:'1vw'}}
        type={type}
        className={cx("custom-input")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
    />
    );
}

export default InputText;
