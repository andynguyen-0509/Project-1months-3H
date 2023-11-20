import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import { Dialog, DialogContent, FormControl, TextField } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { nameDevices } from '../../../mock/modal';
import {
    StyledDialogContentText,
    StyledDialogTitle,
    StyledSubTypography,
    StyledDiscardButton,
    StyledAcceptButton,
    StyledExpandMore,
    styleRenderInput,
    StyledTextField,
    StyledAutocomplete,
    StyledMenuItem,
} from '../../common/ModalStyle';
import styles from './RoomForm.module.scss';
// import { addRoom, updateRoom } from '../../../redux/room/logic';

const cx = classNames.bind(styles);

const validationForm = Yup.object({
    name: Yup.string().required('This field is required!'),
    location: Yup.string().required('This field is required!'),
    description: Yup.string().required('This field is required!'),
    devices: Yup.array().min(1, 'At least one device must be selected'),
    capacity: Yup.number().min(1, 'At least one person').integer().required('This field is required'),
    colorId: Yup.string().required('You must choose color for this room'),
});

function RoomForm({ create, open, onChangeOpen, scroll, update }) {
    const dispatch = useDispatch();
    const { colors } = useSelector((state) => state.rooms);

    const initialValue = update
        ? { ...update }
        : {
              name: '',
              location: '',
              description: '',
              devices: [],
              capacity: 0,
              colorId: '',
          };

    // const handleSubmit = async (values, { resetForm }) => {
    //     const newRoom = {
    //         ...values,
    //         status: 'Opening',
    //     };

    //     const roomUpdated = {
    //         name: values.name,
    //         location: values.location,
    //         devices: values.devices,
    //         description: values.description,
    //         capacity: values.capacity,
    //         colorId: values.colorId,
    //         status: values.status,
    //     };

    //     create
    //         ? await dispatch(addRoom(newRoom))
    //         : await dispatch(updateRoom({ id: update.id, roomUpdated: roomUpdated }));
    //     setTimeout(() => {
    //         handleClose();
    //         resetForm();
    //     }, 1000);
    // };

    const handleClose = () => {
        onChangeOpen(false);
    };

    return (
        <Formik
            initialValues={{ ...initialValue }}
            validationSchema={validationForm}
            onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}
        >
            {({ touched, errors, values, setFieldValue }) => (
                <Dialog open={open} onClose={handleClose} scroll={scroll}>
                    <Form>
                        <DialogContent sx={{ minWidth: '600px', padding: '24px' }} dividers={scroll === 'body'}>
                            {create ? (
                                <StyledDialogTitle sx={{ padding: 0 }}>New Meeting Room</StyledDialogTitle>
                            ) : (
                                <StyledDialogTitle sx={{ padding: 0 }}>Edit Cali Room</StyledDialogTitle>
                            )}
                            <StyledDialogContentText sx={{ margin: '16px 0' }}>
                                Setup the meeting room
                            </StyledDialogContentText>
                            <FormControl className={cx('container')} variant="standard">
                                {/* Room Name */}
                                <StyledSubTypography>Room Name</StyledSubTypography>
                                <Field
                                    as={StyledTextField}
                                    id="name"
                                    name="name"
                                    size="medium"
                                    placeholder="Enter your room name ..."
                                    error={touched.name && errors.name ? true : false}
                                    helperText={touched.name && errors.name ? errors.name : ''}
                                />

                                {/* Location */}
                                <StyledSubTypography>Location</StyledSubTypography>
                                <Field
                                    as={StyledTextField}
                                    id="location"
                                    name="location"
                                    size="medium"
                                    placeholder="Enter room's location ..."
                                    error={touched.location && errors.location ? true : false}
                                    helperText={touched.location && errors.location ? errors.location : ''}
                                />

                                {/* Description */}
                                <StyledSubTypography>Description</StyledSubTypography>
                                <Field
                                    multiline
                                    as={StyledTextField}
                                    id="description"
                                    name="description"
                                    size="medium"
                                    placeholder="Your Description ..."
                                    error={touched.description && errors.description ? true : false}
                                    helperText={touched.description && errors.description ? errors.description : ''}
                                />

                                {/* Devices */}
                                <StyledSubTypography>Device</StyledSubTypography>
                                <Field name="devices">
                                    {({ field }) => (
                                        <StyledAutocomplete
                                            {...field}
                                            value={values.devices}
                                            onChange={(event, value) => setFieldValue('devices', value)}
                                            multiple
                                            popupIcon={<StyledExpandMore />}
                                            options={nameDevices}
                                            getOptionLabel={(option) => option}
                                            disableCloseOnSelect
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    name="devices"
                                                    id="devices"
                                                    variant="outlined"
                                                    placeholder="Pick Your Device ..."
                                                    error={touched.devices && errors.devices ? true : false}
                                                    helperText={touched.devices && errors.devices ? errors.devices : ''}
                                                />
                                            )}
                                            renderOption={(props, option, { selected }) => (
                                                <StyledMenuItem {...props} key={option} value={option}>
                                                    {option}
                                                    {selected ? (
                                                        <CheckIcon color="primary" sx={{ marginLeft: '8px' }} />
                                                    ) : null}
                                                </StyledMenuItem>
                                            )}
                                        />
                                    )}
                                </Field>

                                {/* Capacity */}
                                <StyledSubTypography>Capacity</StyledSubTypography>
                                <Field
                                    as={StyledTextField}
                                    size="medium"
                                    name="capacity"
                                    id="capacity"
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            max: 50,
                                            min: 0,
                                        },
                                    }}
                                    error={touched.capacity && errors.capacity ? true : false}
                                    helperText={touched.capacity && errors.capacity ? errors.capacity : ''}
                                />

                                {/* Color */}
                                <StyledSubTypography>Meeting Color</StyledSubTypography>
                                <Field>
                                    {({ field }) => (
                                        <StyledAutocomplete
                                            {...field}
                                            sx={{ ...styleRenderInput }}
                                            value={values.colorId && colors[values.colorId].background}
                                            onChange={(event, value) => {
                                                setFieldValue('colorId', value ? value : '');
                                            }}
                                            popupIcon={<StyledExpandMore />}
                                            isOptionEqualToValue={(option, value) => {
                                                return colors[option].background === value;
                                            }}
                                            options={Object.keys(colors)}
                                            getOptionLabel={(option) => option.background || ''}
                                            renderInput={(params) =>
                                                values.colorId === '' ? (
                                                    <StyledTextField
                                                        {...params}
                                                        name="colorId"
                                                        id="colorId"
                                                        variant="outlined"
                                                        placeholder="Pick Room Color ..."
                                                        error={touched.colorId && errors.colorId ? true : false}
                                                        helperText={
                                                            touched.colorId && errors.colorId ? errors.colorId : ''
                                                        }
                                                    />
                                                ) : (
                                                    <StyledTextField
                                                        {...params}
                                                        name="colorId"
                                                        id="colorId"
                                                        variant="outlined"
                                                        error={touched.colorId && errors.colorId ? true : false}
                                                        helperText={
                                                            touched.colorId && errors.colorId ? errors.colorId : ''
                                                        }
                                                        sx={{
                                                            '& .MuiInputBase-input': {
                                                                backgroundColor: colors[values.colorId].background,
                                                            },
                                                        }}
                                                    />
                                                )
                                            }
                                            renderOption={(props, option) => (
                                                <StyledMenuItem
                                                    {...props}
                                                    key={option}
                                                    value={colors[option].background}
                                                    disableGutters
                                                >
                                                    <div className={cx('menu-items__wrapper')}>
                                                        <div
                                                            className={cx('menu-items__color')}
                                                            style={{ background: colors[option].background }}
                                                        ></div>
                                                        <div className={cx('menu-items__text')}>
                                                            {colors[option].background}
                                                        </div>
                                                    </div>
                                                </StyledMenuItem>
                                            )}
                                        />
                                    )}
                                </Field>

                                {/* Button */}
                                <div className={cx('btn')}>
                                    <StyledDiscardButton variant="text" onClick={handleClose}>
                                        Discard
                                    </StyledDiscardButton>
                                    <StyledAcceptButton type="submit" variant="contained">
                                        {create ? 'Create' : 'Update'}
                                    </StyledAcceptButton>
                                </div>
                            </FormControl>
                        </DialogContent>
                    </Form>
                </Dialog>
            )}
        </Formik>
    );
}

RoomForm.propTypes = {
    create: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    onChangeOpen: PropTypes.func.isRequired,
    scroll: PropTypes.string,
    update: PropTypes.object,
};

export default RoomForm;