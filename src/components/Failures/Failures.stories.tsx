import { ComponentStory, ComponentMeta } from '@storybook/react';

import Failures, { FailuresProps } from './Failures';

export default {
  title: 'Lists/Failures',
  component: Failures,
} as ComponentMeta<typeof Failures>;

const Template: ComponentStory<typeof Failures> = (args: FailuresProps) => <Failures {...args} />;

export const Default = Template.bind({});

Default.args = {
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