import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Image } from '../../components/Images';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
           
            <div className={cx('container')}>
                <Image name ="advertise"/>
        
                <div className= {cx('small-image')}>
                    <Image name ="advertise" width="300px" height ="244px"/>
                    <Image name ="advertise" width="300px" height ="244px"/>
                    <Image name ="advertise" width="300px" height ="244px"/>
                </div>
            
            </div>
        </div>
    );
}

export default Login;
