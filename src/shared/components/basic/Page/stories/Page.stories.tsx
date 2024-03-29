import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as HeaderStories from '@shared/components/basic/Header/stories/Header.stories';

import { Page } from '../Page';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
