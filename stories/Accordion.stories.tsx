import React from 'react';
import { Accordion } from '../src';
import { SIZE_ENUM, BACKGROUND_ENUM } from '../src/types/global.types';

export default {
    title: 'Components/Accordion',
    component: Accordion,
};


export const AccordionWithText = () => <Accordion headerText='Accordion with text'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Accordion>


export const AccordionWithImage = () => <Accordion headerText='Accordion with text'>
    <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Japan" />
</Accordion>