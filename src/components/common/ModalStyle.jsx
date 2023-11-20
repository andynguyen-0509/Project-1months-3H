import styled from '@emotion/styled';
import { Button, DialogTitle, DialogContentText, Typography, TextField, Autocomplete, MenuItem } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const StyledButton = styled(Button)({
    marginRight: '16px',
    fontSize: '14px',
    width: '95px',
    height: '32px',
    fontFamily: 'var(--font-family)',
    textTransform: 'capitalize',
    padding: '6px 8px',
});

const StyledButtonInTable = styled(Button)({
    minWidth: '30px',
    color: '#172B4D',
    fontFamily: 'var(--font-family)',
    fontSize: '14px',
    textTransform: 'capitalize',
    padding: '8px',
    marginRight: '8px',
});

const StyledDialogTitle = styled(DialogTitle)({
    fontFamily: 'var(--font-family)',
    fontWeight: 500,
    fontSize: 20,
    color: '#172B4D',
});

const StyledDialogContentText = styled(DialogContentText)({
    fontFamily: 'var(--font-family)',
    fontWeight: 400,
    fontSize: 14,
    color: '#172B4D',
});

const StyledTypography = styled(Typography)({
    fontFamily: 'var(--font-family)',
    fontWeight: 400,
    fontSize: 14,
    color: ' #091E42',
});

const StyledSubTypography = styled(Typography)({
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    color: '#172B4D',
    marginBottom: '-22px',
});

const StyledDiscardButton = styled(Button)({
    padding: '6px 12px',
    fontWeight: 500,
    color: '#42526E',
    textTransform: 'capitalize',
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
});

const StyledAcceptButton = styled(Button)({
    padding: '6px 12px',
    fontWeight: 500,
    color: '#FFFFFF',
    textTransform: 'capitalize',
    fontFamily: 'var(--font-family)',
    fontSize: '14px',
});

const StyledExpandMore = styled(ExpandMore)({
    width: '20px',
    height: '20px',
    background: 'rgba(255, 255, 255, 0.0001)',
    color: 'gray',
});

const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        width: '100%',
        minHeight: '40px',
        padding: '8px',
        fontSize: '1.4rem',
        fontFamily: 'var(--font-family)',
    },
    '& .MuiInputBase-input': {
        padding: '0px',
    },
    '& .MuiFormHelperText-root': {
        fontSize: '12px',
        fontFamily: 'var(--font-family)',
    },
});

const StyledAutocomplete = styled(Autocomplete)({
    '& .MuiAutocomplete-endAdornment': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        top: 'auto',
    },

    '& .MuiInputBase-root': {
        padding: '2px 3px',
        background: '#FAFBFC',
        fontSize: '14px',
        fontFamily: 'var(--font-family)',
        borderRadius: '2px',
        minHeight: '40px',
    },
    '& .MuiButtonBase-root': {
        fontSize: '13px',
        fontWeight: '500',
        color: '#333',
        fontFamily: 'var(--font-family)',
        borderRadius: '2px',
        height: '24px',
    },

    '& .MuiFormHelperText-root': {
        fontSize: '12px',
        fontFamily: 'var(--font-family)',
    },
});

const styleRenderInput = {
    '& .MuiAutocomplete-input': {
        maxWidth: '150px',
        borderRadius: '2px',
        height: '10px',
    },
};

const StyledMenuItem = styled(MenuItem)({
    display: 'flex',
    margin: '6px auto',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'var(--font-family)',
});

export {
    StyledButton,
    StyledButtonInTable,
    StyledDialogTitle,
    StyledDialogContentText,
    StyledTypography,
    StyledSubTypography,
    StyledDiscardButton,
    StyledAcceptButton,
    StyledExpandMore,
    StyledTextField,
    StyledAutocomplete,
    StyledMenuItem,
    styleRenderInput,
};