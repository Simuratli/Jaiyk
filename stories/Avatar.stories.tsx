import React from 'react';
import { Avatar } from '../src';
import { SIZE_ENUM, BACKGROUND_ENUM } from '../src/types/global.types';

export default {
    title: 'Components/Avatar',
    component: Avatar,
};

const Template = (args) => <Avatar {...args} />;
export const Default = Template.bind({});

Default.args = {
    size: SIZE_ENUM.XLARGE,
    rounded: true,
    bg: BACKGROUND_ENUM.LILAC
}



export const WithImage = Template.bind({});

WithImage.args = {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    size: SIZE_ENUM.XLARGE,
    rounded: true
}


// export const WithIcon = Template.bind({});

