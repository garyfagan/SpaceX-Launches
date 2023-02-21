import { ComponentStory, ComponentMeta } from '@storybook/react';

import LaunchStatusTooltip from './LaunchStatusTooltip';

export default {
  title: 'Tooltips/LaunchStatusTooltip',
  component: LaunchStatusTooltip,
} as ComponentMeta<typeof LaunchStatusTooltip>;

const Template: ComponentStory<typeof LaunchStatusTooltip> = (args) => <LaunchStatusTooltip {...args} />;

export const Default = Template.bind({});