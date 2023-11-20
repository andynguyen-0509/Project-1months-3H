import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { meetings, times } from '../../mock/schedule';
import { rooms } from '../../mock/room';
import { Box, Button, IconButton, MenuItem, Select } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
import {
    filterSelectStyle,
    boxStyle,
    buttonFilter,
    selectStyle,
    styleFormControl,
    wrapperIconStyle,
    iconStyle,
    dropdownButton,
} from '../common/ScheduleFilterActionsStyle';

const ScheduleFilterActions = () => {
    const [weekTime, setWeekTime] = useState('All Meeting');
    const [nameRoom, setNameRoom] = useState('All Room');
    const [time, setTime] = useState(times[1].value);

    const handleChangeWeekTime = (e) => {
        setWeekTime(e.target.value);
    };

    const handleChangeNameRoom = (e) => {
        setNameRoom(e.target.value);
    };

    const handleChangeTime = (e) => {
        setTime(e.target.value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={boxStyle}>
                <FormControl sx={styleFormControl}>
                    <Select
                        autoWidth
                        sx={{ ...filterSelectStyle, ...selectStyle, ...dropdownButton }}
                        value={weekTime ? weekTime : ''}
                        onChange={handleChangeWeekTime}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>All Meeting</em>;
                            }
                            return selected;
                        }}
                        MenuProps={{
                            disableScrollLock: true,
                        }}
                        IconComponent={ExpandMore}
                    >
                        {meetings.map((meet) => (
                            <MenuItem key={meet.id} value={meet.value} sx={filterSelectStyle}>
                                {meet.value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={styleFormControl}>
                    <Select
                        autoWidth
                        sx={{ ...filterSelectStyle, ...selectStyle, ...dropdownButton }}
                        value={nameRoom ? nameRoom : ''}
                        onChange={handleChangeNameRoom}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>All Room</em>;
                            }
                            return selected;
                        }}
                        MenuProps={{
                            disableScrollLock: true,
                        }}
                        IconComponent={ExpandMore}
                    >
                        {rooms.map((room) => (
                            <MenuItem key={room.id} value={`Room ${room.id}`} sx={filterSelectStyle}>
                                {`Room ${room.id}`}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="contained" size="medium" sx={buttonFilter}>
                    Today
                </Button>
                <div style={{ display: 'flex', marginLeft: '-8px' }}>
                    <IconButton sx={wrapperIconStyle}>
                        <ChevronLeft sx={iconStyle} />
                    </IconButton>
                    <IconButton sx={wrapperIconStyle}>
                        <ChevronRight sx={iconStyle} />
                    </IconButton>
                </div>
            </Box>
            <FormControl sx={{ marginRight: '12px' }}>
                <Select
                    autoWidth
                    sx={{ ...filterSelectStyle, ...selectStyle, ...dropdownButton }}
                    value={time ? time : ''}
                    onChange={handleChangeTime}
                    defaultValue={times[1].value}
                    MenuProps={{
                        disableScrollLock: true,
                    }}
                    IconComponent={ExpandMore}
                >
                    {times.map((time) => (
                        <MenuItem key={time.id} value={time.value} sx={filterSelectStyle}>
                            {time.value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default ScheduleFilterActions;
