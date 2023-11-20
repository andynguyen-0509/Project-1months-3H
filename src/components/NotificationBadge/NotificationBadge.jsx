import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NotificationBadge({ badgeContent, notifications }) {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Badge badgeContent={badgeContent} color="error" invisible={!badgeContent}>
        <NotificationsIcon 
            sx={{
                width:  "2.5vw",
                height: "2.5vw"
            }}
            onClick={handlePopoverOpen} />
      </Badge>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      </Popover>
    </div>
  );
}

export default NotificationBadge;
