import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Spinner from '../components/spinner';


const Template: Story<ComponentProps<typeof Spinner>> = (props) => {
  return (
    <>
      <Spinner {...props} />
      <Spinner />
    </>
  );
};

export const Default = Template.bind({});
Default.args = { size: 30, beam: 4 };

export default { title: 'Spinner', component: Spinner };
