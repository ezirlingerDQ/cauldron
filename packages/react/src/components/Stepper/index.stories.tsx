import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stepper, { Step } from './';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal'
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical']
    },
    children: { table: { disable: true } }
  }
};

export default meta;

type Story = StoryObj<typeof Stepper>;

type Args = React.ComponentProps<typeof Stepper>;

const Template = (args: Args) => (
  <Stepper {...args}>
    <Step status="complete">Select all stuff/things/such</Step>
    <Step status="current">Analyze the stuff</Step>
    <Step status="future">Review all of the things</Step>
    <Step status="future">Confirm</Step>
  </Stepper>
);

export const Default: Story = {
  render: (args: Args) => <Template {...args} />,
  args: {
    orientation: 'horizontal'
  }
};

export const Vertical: Story = {
  render: (args: Args) => <Template {...args} />,
  args: {
    orientation: 'vertical'
  }
};

export const VerticalWithTooltips: Story = {
  render: (args: Args) => (
    <Stepper {...args}>
      <Step
        status="complete"
        tooltip={
          <>
            <div>Step 1: Foo</div>
            <div>Status: Complete</div>
          </>
        }
        tooltipText="Foo Complete"
      />
      <Step
        status="current"
        tooltip={
          <>
            <div>Step 2: Bar</div>
            <div>Status: Current</div>
          </>
        }
        tooltipText="Bar Current"
      />
      <Step
        status="future"
        tooltip={
          <>
            <div>Step 3: Baz</div>
            <div>Status: Future</div>
          </>
        }
        tooltipText="Baz Future"
      />
    </Stepper>
  ),
  args: {
    orientation: 'vertical'
  }
};
