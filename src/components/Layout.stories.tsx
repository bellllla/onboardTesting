import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './Layout';

export default {

  title: 'Page/Layout',
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
},
} as ComponentMeta<typeof Layout>;

// story 변수명은 Template 으로 진행해야해.
const Template: ComponentStory<typeof Layout> = (args) => (
    <Layout {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};
