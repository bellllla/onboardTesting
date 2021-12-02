import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from './index';

export default {

  title: 'Page/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

// story 이름 정하기.
export const Template: ComponentStory<typeof Home> = () => <Home />;

