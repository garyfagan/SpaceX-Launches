import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card, { CardProps } from './Card';

export default {
  title: 'Card/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: '12345',
  image: 'https://placekitten.com/200/200',
  name: 'Joe Bloggs',
  date: '23rd January 2023',
  success: false,
  serial: '54321',
  payloads: [
    {
      id: '12345',
      type: 'Satellite'
    },
    {
      id: '54321',
      type: 'Dragon Boilerplate'
    }
  ],
  failures: [
    {
      altitude: 1,
      time: 2,
      reason: 'merlin engine failure'
    },
    {
      altitude: 3,
      time: 4,
      reason: 'harmonic oscillation leading to premature engine shutdown'
    }
  ]
};