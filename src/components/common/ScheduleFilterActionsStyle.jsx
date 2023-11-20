const boxStyle = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '16px 0',
};

const styleFormControl = {
    minWidth: 118,
    margin: 0,
};

const filterSelectStyle = {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: '14px',
    color: '#7A869A',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '118px',
    borderRadius: '3px',
};

const selectStyle = {
    '& .MuiInputBase-input': { padding: '6px 8px' },
    '& .MuiOutlinedInput-root': { borderRadius: '3px' },
    background: '#F4F5F7',
};

const dropdownButton = {
    '& .MuiSvgIcon-root': {
        fontSize: '24px',
        background: 'rgba(255, 255, 255, 0.0001)',
    },
};

const buttonFilter = {
    color: '#42526E',
    background: '#F4F5F7',
    borderRadius: '3px',
    padding: '3px 12px',
    width: '63px',
    textTransform: 'capitalize',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'Nunito',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: '#F4F5F7',
        boxShadow: 'none',
    },
};

const wrapperIconStyle = {
    width: '24px',
    height: '24px',
};

const iconStyle = {
    width: '24px',
    height: '24px',
};

export {
    filterSelectStyle,
    boxStyle,
    buttonFilter,
    selectStyle,
    styleFormControl,
    wrapperIconStyle,
    iconStyle,
    dropdownButton,
};
