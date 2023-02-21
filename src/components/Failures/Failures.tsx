import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import FailureType from '../../../types/Failure';

export type FailuresProps = {
  failures: FailureType[];
};

const Failures = ({ failures }: FailuresProps) => (
  <>
    <Typography fontWeight={700}>Failures</Typography>
    <List>
      {failures.map((failure) => (
        <ListItem key={failure.time}>
          <ListItemAvatar>
            <Avatar>
              <ErrorIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={failure.reason}
            secondary={
              <>
                {failure.time && (
                  <Typography display="block" component="span" variant="body2">
                    Time: {failure.time}
                  </Typography>
                )}
                {failure.altitude && (
                  <Typography display="block" component="span" variant="body2">
                    Altitude: {failure.altitude}
                  </Typography>
                )}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  </>
);

export default Failures;
