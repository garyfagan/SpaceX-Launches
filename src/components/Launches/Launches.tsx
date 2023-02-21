import { Grid } from '@mui/material';

import ErrorAlert from '../Error/Error';
import Card from '../Card/Card';
import Progress from '../Progress/Progress';

import { useLaunches } from '../../hooks/useLaunches';

// TODO: Add types here
const Launches = () => {
  const { data, isLoading, isError } = useLaunches(10);

  if (isLoading) return <Progress />;

  if (isError) return <ErrorAlert>There was an error</ErrorAlert>;

  return (
    <Grid container spacing={2}>
      {data?.map((launch) => (
        <Grid key={launch.id} item xs={12} sm={6}>
          <Card
            date={launch.date}
            failures={launch.failures}
            id={launch.id}
            image={launch.image}
            name={launch.name}
            payloads={launch.payloads}
            serial={launch.serial}
            success={launch.success}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Launches;
