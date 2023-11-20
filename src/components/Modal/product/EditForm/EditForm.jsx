import React, { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import Autocomplete from '@mui/material/Autocomplete';
import { MenuItem } from '@mui/material';
import styles from './EditForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const inputStyle = {
    '& .MuiInputBase-input': {
        fontSize: '12px',
        width: '400px'
    }
};
const categories = [
    'Áo thun',
    'Quần jeans',
    'Giày thể thao',
    'Balo',
    'Đồng hồ',
    'Váy',
    'Túi xách',
    'Áo khoác',
    'Mũ',
    'Nội thất',
  ];
  

function EditForm({ product, onClose }) {
    const [editedProduct, setEditedProduct] = useState({
        ...product,

    });
  
    const [previewImage, setPreviewImage] = useState( product !== null ?product.images[0].url: '');
   

    const handleSave = () => {
        onClose();
    };

    const handleClose = () => {
        onClose();
    };
    const handleInputChange = (e, newValue) => {
        if (newValue) {
           
            setEditedProduct({
                ...editedProduct,
                category: newValue,
            });
        }
    };
   
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setEditedProduct({
            ...editedProduct,
            image: imageFile,
        });
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(imageFile);
    };

    return (
        <div className={cx('wrapper')}>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogContent className={cx('product')}>
                <div className={cx('product-info')}>

                    
                <Typography style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    Name
                </Typography>
                <TextField
                    name="name"
                    value={editedProduct.name}
                    onChange={handleInputChange}
                    fullWidth
                    sx={inputStyle}
                />

                <Typography style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    Brand
                </Typography>
                <TextField
                    name="brand"
                    value={editedProduct.brand}
                    onChange={handleInputChange}
                    fullWidth
                    sx={inputStyle}
                />

                <Typography style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    Category
                </Typography>
                <Autocomplete
                                            defaultValue={[product===null ?'' :product.category]}
                                            onChange={handleInputChange}
                                            multiple
                                            // popupIcon={<StyledExpandMore />}
                                            options={categories}
                                            getOptionLabel={(option) => option}
                                            disableCloseOnSelect
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    name="category"
                                                    id="category"
                                                    variant="outlined"
                                                    placeholder="Pick Your product category ..."
                                                    // defaultValue = {editedProduct.category}
                                                />
                                            )}
                                            renderOption={(props, option, { selected }) => (
                                                <MenuItem {...props} key={option} value={option}>
                                                    {option}
                                                    {selected ? (
                                                        <CheckIcon color="primary" sx={{ marginLeft: '8px' }} />
                                                    ) : null}
                                                </MenuItem>
                                            )}
                                        />

                <Typography style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    Number of product
                </Typography>
                <TextField
                    name="countInStock"
                    value={editedProduct.countInStock}
                    onChange={handleInputChange}
                    fullWidth
                    sx={inputStyle}
                />

                <Typography style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    Price
                </Typography>
                <TextField
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                    fullWidth
                    sx={inputStyle}
                />

                <Typography style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    Rating
                </Typography>
                <Rating
                    name="product-rating"
                    value={editedProduct.rating}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        setEditedProduct({
                            ...editedProduct,
                            rating: newValue,
                        });
                    }}
                />
                </div>
                <div className={cx('image')}>
                <Typography style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    Image
                </Typography>
                <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Preview"
                            style={{ marginTop: '10px', maxWidth: '100px' }}
                        />
                    )}
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </div>
    );
}

export default EditForm;
