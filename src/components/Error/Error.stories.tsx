import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorAlert from './Error';

export default {
  title: 'Feedback/Error',
  component: ErrorAlert,
} as ComponentMeta<typeof ErrorAlert>;

const Template: ComponentStory<typeof ErrorAlert> = (args) => <ErrorAlert {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'There was an error',
};