import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ClickContainer from './ClickContainer';

export default {

  title: 'Page/Home/ClickContainer',
  component: ClickContainer,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
},
} as ComponentMeta<typeof ClickContainer>;

// story 변수명은 Template 으로 진행해야해.
const Template: ComponentStory<typeof ClickContainer> = (args) => (
    <ClickContainer {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};



