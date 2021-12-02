import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContentContainer from './ContentsContainer';

export default {

  title: 'Page/Home/ContentContainer',
  component: ContentContainer,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
},
} as ComponentMeta<typeof ContentContainer>;

// story 변수명은 Template 으로 진행해야해.
const Template: ComponentStory<typeof ContentContainer> = (args) => (
    <ContentContainer {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};


