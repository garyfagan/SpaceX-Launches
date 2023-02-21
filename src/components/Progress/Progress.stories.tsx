import { ComponentStory, ComponentMeta } from '@storybook/react';

import Progress from './Progress';

export default {
  title: 'Feedback/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = () => <Progress />;

export const Default = Template.bind({});