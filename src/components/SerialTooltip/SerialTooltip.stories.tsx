import { ComponentStory, ComponentMeta } from '@storybook/react';

import SerialTooltip from './SerialTooltip';

export default {
  title: 'Tooltips/SerialTooltip',
  component: SerialTooltip,
} as ComponentMeta<typeof SerialTooltip>;

const Template: ComponentStory<typeof SerialTooltip> = (args) => <SerialTooltip {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '12345'
};