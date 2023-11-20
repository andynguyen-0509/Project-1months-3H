import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';
import { Avatar, TextField, Alert, AlertTitle, Collapse, IconButton, CircularProgress } from '@mui/material';
import test from '../../assets/images/Test.jpg';
import { useState, useEffect, useRef } from 'react';
import useFetch from '../../useFetch/useFetch';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
const cx = classNames.bind(styles);
const url = 'https://646f91b709ff19b120877f1c.mockapi.io/api/v1/users/';
function UserInfo() {
    const [success, setSuccess] = useState(false);

    const { response, loading, error } = useFetch({
        url: url,
    });
    const handelUpdateNew = () => {
        axios
            .put(url + formik.values.id, {
                id: formik.values.id,
                body: formik.values.password,
                title: formik.values.username,
            })
            .then((response) => {
                setSuccess(true);
            })
            .catch((err) => {
                setSuccess(false);
                console.log(err);
            });
    };

    useEffect(() => {
        response &&
            formik.setValues({
                username: response[0].title,
                password: response[0].body,
                id: response[0].id,
            });
    }, [response]);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            id: '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            password: Yup.string().min(8, 'Minimum 8 characters').required('Required!'),
        }),
        onSubmit: handelUpdateNew,
    });

    return (
        <>
            {loading && (
                <div className={cx('loading')}>
                    <CircularProgress />
                </div>
            )}
            {error && <div className={cx('loading')}>{error}</div>}
            {response && (
                <div className={cx('container')}>
                    <div className={cx('img')}>
                        <Avatar
                            sx={{
                                width: 200,
                                height: 200,
                            }}
                            alt="Remy Sharp"
                            src={test}
                        />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('user_header')}>User Information</div>
                        <div className={cx('user_info')}>
                            <span className={cx('username')}>
                                <span style={{ marginRight: '1rem' }}>Username:</span>
                                <TextField
                                    id="outlined-read-only-input"
                                    size="small"
                                    name="username"
                                    variant="standard"
                                    fullWidth
                                    value={formik.values.username}
                                    InputProps={{
                                        style: { fontSize: '1.3rem' },
                                        readOnly: true,
                                    }}
                                />
                            </span>
                            <span className={cx('username')}>
                                <span style={{ marginRight: '1rem' }}>Password:</span>
                                <span style={{ width: '100%' }}>
                                    <TextField
                                        variant="standard"
                                        size="small"
                                        fullWidth
                                        name="password"
                                        placeholder="Please fill in the new password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        InputProps={{
                                            style: { fontSize: '1.3rem' },
                                        }}
                                    />
                                </span>
                            </span>
                            {formik.errors.password && formik.touched.password && (
                                <span className={cx('err')}>{formik.errors.password}</span>
                            )}

                            <div className={cx('btn')}>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        formik.handleSubmit(e);
                                    }}
                                >
                                    <button className={cx('submit')}>Change</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Collapse in={success} className={cx('success')}>
                        <Alert
                            sx={{
                                fontSize: '1.4rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'var(--font-family)',
                            }}
                            className={cx('success_text')}
                            action={
                                <IconButton
                                    sx={{ fontSize: '1.4rem', position: 'absolute', top: 0, right: 0 }}
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setSuccess(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            Success
                        </Alert>
                    </Collapse>
                </div>
            )}
        </>
    );
}
export default UserInfo;
