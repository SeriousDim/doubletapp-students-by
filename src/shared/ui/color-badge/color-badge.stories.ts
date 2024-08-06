import {Meta, StoryObj} from '@storybook/react'
import {ColorBadge} from './color-badge.tsx'
import {ColorBadgeProps} from './props.ts'

const meta = {
  title: 'UI/Color Badge',
  component: ColorBadge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof ColorBadge>

export default meta

type Story = StoryObj<ColorBadgeProps>

export const Blue: Story = {
  args: {
    color: 'blue'
  }
}

export const Red: Story = {
  args: {
    color: 'red'
  }
}

export const Green: Story = {
  args: {
    color: 'green'
  }
}

export const Yellow: Story = {
  args: {
    color: 'yellow'
  }
}

export const Black: Story = {
  args: {
    color: 'black'
  }
}

export const Orange: Story = {
  args: {
    color: 'orange'
  }
}

export const Rainbow: Story = {
  args: {
    color: 'rainbow'
  }
}

export const Mini: Story = {
  args: {
    color: 'blue',
    type: 'mini'
  }
}

export const RainbowMini: Story = {
  args: {
    color: 'rainbow',
    type: 'mini'
  }
}
