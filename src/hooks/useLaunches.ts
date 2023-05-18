import ky from 'ky-universal';
import { useQuery } from '@tanstack/react-query';

import FailureType from '../../types/Failure';
import PayloadType from '../../types/Payload';

const fetchLaunches = async (limit = 10) => {
  const result = await ky.post('https://api.spacexdata.com/v5/launches/query', {
    json: {
      'query': {},
      'options': {
        'limit': limit,
        'select': {
          'name': 1,
          'date_utc': 1,
          'cores': 1,
          'success': 1,
          'failures': 1,
          'links': {
            'patch': {
                'small': 1
            }
          }
        },
        'populate': [
          {
            'path': 'payloads',
            'select': {
              'id': 1,
              'type': 1
            }
          },
          {
            'path': 'cores',
            'populate': [
              {
                'path': 'core',
                'select': {
                  'serial': 1
                }
              }
            ]
          }
        ]
      }
    }
  }).json();

  return result;
};

type Core = {
  core: {
    serial: string;
  }
};

type Launch = {
  id: string;
  date_utc: string;
  failures: FailureType[];
  payloads: PayloadType[];
  name: string;
  cores: Core[];
  success: boolean;
  links: {
    patch: {
      small: string;
    }
  }
};

type Launches = {
  docs: Launch[];
};

const useLaunches = (limit: number) => {
  return useQuery({
    queryKey: ['launches', limit],
    queryFn: () => fetchLaunches(limit),
    select: (data: Launches) => data.docs.map((launch: Launch) => {
      return {
        id: launch.id,
        date: launch.date_utc,
        failures: launch.failures,
        name: launch.name,
        payloads: launch.payloads,
        serial: launch.cores[0].core.serial,
        success: launch.success,
        image: launch.links.patch.small,
      };
    }),
  });
};

export { useLaunches, fetchLaunches };