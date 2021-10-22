import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';

const Meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  label: 'Button',
};

const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export { Meta as default, Primary, Secondary, Large, Small };
