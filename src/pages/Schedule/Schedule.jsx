import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';
import { MoreIcon } from '../../components/Icons';
import MyCalendar from '../../components/Calendar/index.js';
import ScheduleFilterActions from '../../components/Filter Dropdown/ScheduleFilterActions';

const cx = classNames.bind(styles);

function Schedule() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('path')}>
                    <span>Calendar</span>
                    <span>/</span>
                    <span>Meeting Schedule</span>
                </div>
                <div className={cx('main-content')}>
                    <span className={cx('title')}>Meeting Schedule</span>
                    <div className={cx('action')}>
                        <MoreIcon />
                    </div>
                </div>
                <div className={cx('filter')}>
                    <ScheduleFilterActions />
                </div>
            </div>
            <div className={cx('container')}>
                <MyCalendar />
            </div>
        </div>
    );
}

export default Schedule;
