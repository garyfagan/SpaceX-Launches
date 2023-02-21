import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './Logo';

export default {
  title: 'Navigation/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const Default = Template.bind({});