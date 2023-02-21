import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';
import Launches from './Launches';

export default {
  title: 'Launches/Launches',
  component: Launches,
};

const defaultQueryClient = new QueryClient();

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <Launches />
  </QueryClientProvider>
);

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const MockTemplate = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <Launches />
  </QueryClientProvider>
);

// TODO: Move this
const launches = {
  docs: [
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: false,
      failures: [
        {
          time: 100,
          altitude: 20,
          reason: 'big failure',
        },
      ],
      payloads: [
        {
          type: 'Satellite',
          id: '5eb0e4b5b6c3bb0006eeb1e1',
        },
      ],
      name: 'Launch 1',
      date_utc: '2006-03-24T22:30:00.000Z',
      cores: [
        {
          core: {
            serial: 'Merlin1A',
            id: '5e9e289df35918033d3b2623',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87cd9ffd86e000604b32a',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: false,
      failures: [
        {
          time: 301,
          altitude: 289,
          reason: 'harmonic oscillation leading to premature engine shutdown',
        },
      ],
      payloads: [
        {
          type: 'Satellite',
          id: '5eb0e4b6b6c3bb0006eeb1e2',
        },
      ],
      name: 'Launch 2',
      date_utc: '2007-03-21T01:10:00.000Z',
      cores: [
        {
          core: {
            serial: 'Merlin2A',
            id: '5e9e289ef35918416a3b2624',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87cdaffd86e000604b32b',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: false,
      failures: [
        {
          time: 140,
          altitude: 35,
          reason: 'residual stage-1 thrust led to collision between stage 1 and stage 2',
        },
      ],
      payloads: [
        {
          type: 'Satellite',
          id: '5eb0e4b6b6c3bb0006eeb1e3',
        },
        {
          type: 'Satellite',
          id: '5eb0e4b6b6c3bb0006eeb1e4',
        },
      ],
      name: 'Launch 3',
      date_utc: '2008-08-03T03:34:00.000Z',
      cores: [
        {
          core: {
            serial: 'Merlin1C',
            id: '5e9e289ef3591814873b2625',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87cdbffd86e000604b32c',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: true,
      failures: [],
      payloads: [
        {
          type: 'Satellite',
          id: '5eb0e4b7b6c3bb0006eeb1e5',
        },
      ],
      name: 'Launch 4',
      date_utc: '2008-09-28T23:15:00.000Z',
      cores: [
        {
          core: {
            serial: 'Merlin2C',
            id: '5e9e289ef3591855dc3b2626',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87cdbffd86e000604b32d',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: true,
      failures: [],
      payloads: [
        {
          type: 'Satellite',
          id: '5eb0e4b7b6c3bb0006eeb1e6',
        },
      ],
      name: 'Launch 5',
      date_utc: '2009-07-13T03:35:00.000Z',
      cores: [
        {
          core: {
            serial: 'Merlin3C',
            id: '5e9e289ef359184f103b2627',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87cdcffd86e000604b32e',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: true,
      failures: [],
      payloads: [
        {
          type: 'Dragon Boilerplate',
          id: '5eb0e4b7b6c3bb0006eeb1e7',
        },
      ],
      name: 'Launch 6',
      date_utc: '2010-06-04T18:45:00.000Z',
      cores: [
        {
          core: {
            serial: 'B0003',
            id: '5e9e289ef359185f2b3b2628',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87cddffd86e000604b32f',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: true,
      failures: [],
      payloads: [
        {
          type: 'Dragon 1.0',
          id: '5eb0e4b9b6c3bb0006eeb1e8',
        },
        {
          type: 'Satellite',
          id: '5eb0e4b9b6c3bb0006eeb1e9',
        },
      ],
      name: 'Launch 7',
      date_utc: '2010-12-08T15:43:00.000Z',
      cores: [
        {
          core: {
            serial: 'B0004',
            id: '5e9e289ef35918187c3b2629',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87cdeffd86e000604b330',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: true,
      failures: [],
      payloads: [
        {
          type: 'Dragon 1.0',
          id: '5eb0e4bab6c3bb0006eeb1ea',
        },
      ],
      name: 'Launch 8',
      date_utc: '2012-05-22T07:44:00.000Z',
      cores: [
        {
          core: {
            serial: 'B0005',
            id: '5e9e289ef35918f39c3b262a',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87cdfffd86e000604b331',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: true,
      failures: [],
      payloads: [
        {
          type: 'Dragon 1.0',
          id: '5eb0e4bab6c3bb0006eeb1eb',
        },
        {
          type: 'Dragon 1.0',
          id: '5eb0e4bab6c3bb0006eeb1ec',
        },
      ],
      name: 'Launch 9',
      date_utc: '2012-10-08T00:35:00.000Z',
      cores: [
        {
          core: {
            serial: 'B0006',
            id: '5e9e289ff3591821a73b262b',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87ce0ffd86e000604b332',
    },
    {
      links: {
        patch: {
          large: null,
          small: 'http://placekitten.com/200/200',
        },
        reddit: {
          campaign: null,
          launch: null,
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [],
        },
        presskit: null,
        webcast: null,
        youtube_id: null,
        article: null,
        wikipedia: null,
      },
      success: true,
      failures: [],
      payloads: [
        {
          type: 'Dragon 1.0',
          id: '5eb0e4bbb6c3bb0006eeb1ed',
        },
      ],
      name: 'Launch 10',
      date_utc: '2013-03-01T19:10:00.000Z',
      cores: [
        {
          core: {
            serial: 'B0007',
            id: '5e9e289ff3591884e03b262c',
          },
          flight: 1,
          gridfins: false,
          legs: false,
          reused: false,
          landing_attempt: false,
          landing_success: null,
          landing_type: null,
          landpad: null,
        },
      ],
      id: '5eb87ce1ffd86e000604b333',
    },
  ],
  totalDocs: 205,
  offset: 0,
  limit: 10,
  totalPages: 21,
  page: 1,
  pagingCounter: 1,
  hasPrevPage: false,
  hasNextPage: true,
  prevPage: null,
  nextPage: 2,
};

export const MockedSuccess = MockTemplate.bind({});
MockedSuccess.parameters = {
  msw: {
    handlers: [
      // TODO: Use shared url
      rest.post('https://api.spacexdata.com/v5/launches/query', (req, res, ctx) => {
        return res(
          ctx.json({
            ...launches,
          })
        );
      }),
    ],
  },
};

export const MockedError = MockTemplate.bind({});
MockedError.parameters = {
  msw: {
    handlers: [
      // TODO: Use shared url
      rest.post('https://api.spacexdata.com/v5/launches/query', (req, res, ctx) => {
        return res(ctx.delay(800), ctx.status(403));
      }),
    ],
  },
};
