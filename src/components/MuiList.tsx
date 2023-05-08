import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <ListItemIcon>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemIcon>
            </ListItemAvatar>
            <ListItemText primary='List Item 1' secondary='Secondary text' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <ListItemIcon>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemIcon>
          </ListItemAvatar>
          <ListItemText primary='List Item 2' secondary='Secondary text' />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <ListItemIcon>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemIcon>
          </ListItemAvatar>
          <ListItemText primary='List Item 3' secondary='Secondary text' />
        </ListItem>
      </List>
    </Box>
  );
};
