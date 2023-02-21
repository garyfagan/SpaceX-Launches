import { IconButton, Tooltip } from '@mui/material';
import QrCode from '@mui/icons-material/QrCode';

type SerialTooltipProps = {
  title: string;
};

const SerialTooltip = ({ title }: SerialTooltipProps) => (
  <Tooltip arrow placement="top" title={`Serial: ${title}`}>
    <IconButton>
      <QrCode />
    </IconButton>
  </Tooltip>
);

export default SerialTooltip;
