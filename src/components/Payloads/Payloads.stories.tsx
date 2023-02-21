import { ComponentStory, ComponentMeta } from '@storybook/react';

import Payloads, { PayloadsProps } from './Payloads';

export default {
  title: 'Lists/Payloads',
  component: Payloads,
} as ComponentMeta<typeof Payloads>;

const Template: ComponentStory<typeof Payloads> = (args: PayloadsProps) => <Payloads {...args} />;

export const Default = Template.bind({});

Default.args = {
  payloads: [
    {
      id: '12345',
      type: 'Satellite'
    },
    {
      id: '54321',
      type: 'Dragon Boilerplate'
    }
  ]
};