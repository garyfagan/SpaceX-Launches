import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

import PayloadType from '../../../types/Payload';

export type PayloadsProps = {
  payloads: PayloadType[];
};

const Payloads = ({ payloads }: PayloadsProps) => (
  <>
    <Typography fontWeight={700}>Payloads</Typography>
    <List>
      {payloads.map(({ id, type }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar>
              <SatelliteAltIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={type} secondary={id} />
        </ListItem>
      ))}
    </List>
  </>
);

export default Payloads;
