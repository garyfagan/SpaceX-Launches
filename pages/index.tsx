import { dehydrate, QueryClient } from '@tanstack/react-query';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { fetchLaunches } from '../src/hooks/useLaunches';
import Logo from '../src/components/Logo/Logo';
import Launches from '../src/components/Launches/Launches';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Logo />
        <Launches />
      </Box>
    </Container>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['launches', 10], () => fetchLaunches(10));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;