import { Alert, AlertProps as MuiAlertProps } from '@mui/material';

type AlertProps = MuiAlertProps;

const ErrorAlert = ({...rest}: AlertProps) => (
  <Alert severity="error" {...rest} />
);

export default ErrorAlert;