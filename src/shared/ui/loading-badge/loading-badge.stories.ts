import {Meta, StoryObj} from '@storybook/react'
import {LoadingBadge} from './loading-badge.tsx'

const meta = {
  title: 'UI/Loading Badge',
  component: LoadingBadge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof LoadingBadge>

export default meta

type Story = StoryObj

export const Example: Story = {

}
