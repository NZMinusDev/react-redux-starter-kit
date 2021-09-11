import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../Header';

const Meta = {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

const LoggedOut = Template.bind({});
LoggedOut.args = {};

export { Meta as default, LoggedIn, LoggedOut };
