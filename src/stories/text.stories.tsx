import React, { ComponentProps, useEffect, useState } from 'react';
import { Story } from '@storybook/react';

const Template: Story = (args) => {
  return (
    <>
      <div>
        <h1>H1</h1>
      </div>
      <div>
        <h2>H2</h2>
      </div>
      <div>
        <h3>H3</h3>
      </div>
      <div>
        <span>body</span>
      </div>
      <div>
        <a href="#">link</a>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Text',
};
