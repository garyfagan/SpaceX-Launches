import { IconButton, Tooltip } from '@mui/material';
import { ThumbDown, ThumbUp } from '@mui/icons-material';

type LaunchStatusTooltipProps = {
  isSuccessful?: boolean;
};

const LaunchStatusTooltip = ({ isSuccessful = false }: LaunchStatusTooltipProps) => (
  <Tooltip arrow placement="top" title={isSuccessful ? 'Successful Launch' : 'Launch Failed'}>
    <IconButton>{isSuccessful ? <ThumbUp /> : <ThumbDown />}</IconButton>
  </Tooltip>
);

export default LaunchStatusTooltip;