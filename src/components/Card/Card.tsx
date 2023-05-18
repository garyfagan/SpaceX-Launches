import { useState } from 'react';
import { Avatar, Card as MuiCard, CardHeader, CardContent, CardActions, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LaunchStatusTooltip from '../LaunchStatusTooltip/LaunchStatusTooltip';
import SerialTooltip from '../SerialTooltip/SerialTooltip';
import Payloads from '../Payloads/Payloads';
import Failures from '../Failures/Failures';
import FailureType from '../../../types/Failure';
import PayloadType from '../../../types/Payload';
import ExpandMore from '../ExpandMore/ExpandMore';
import formatDate from '../../../helpers/formatDate';

export type CardProps = {
  id: string;
  image: string;
  name: string;
  date: string;
  success: boolean;
  serial: string;
  payloads: PayloadType[];
  failures: FailureType[];
};

const Card = ({ image, name, date, success, serial, payloads, failures }: CardProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <MuiCard>
      <CardHeader avatar={<Avatar aria-label="patch" src={image} />} title={name} subheader={formatDate(date)} />
      <CardActions disableSpacing>
        <LaunchStatusTooltip isSuccessful={success} />
        <SerialTooltip title={serial} />
        <ExpandMore color="secondary" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Payloads payloads={payloads} />
          {!success && <Failures failures={failures} />}
        </CardContent>
      </Collapse>
    </MuiCard>
  );
};

export default Card;
