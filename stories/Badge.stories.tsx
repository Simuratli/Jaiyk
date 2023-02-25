import React from 'react';
import { Badge } from '../src';
import { BACKGROUND_ENUM } from '../src/types/global.types';

export default {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        customColor: { control: 'color' },
        customBg: { control: 'color' },
    },
};

const Template = (args) => <Badge {...args} />;


export const Default = Template.bind({});

Default.args = {
    bg: BACKGROUND_ENUM.DANGER
}

export const WithText = Template.bind({});

WithText.args = {
    text: "Badge text"
}