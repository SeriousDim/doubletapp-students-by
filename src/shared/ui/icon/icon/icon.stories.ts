import {Meta, StoryObj} from '@storybook/react'
import {Icon} from './icon.tsx'
import {IconProps} from './props.ts'

const meta = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' }
  }
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<IconProps>

export const SpinnerCheck: Story = {
  args: {
    iconName: 'spinner-check'
  }
}

export const Delete: Story = {
  args: {
    iconName: 'delete'
  }
}

export const Search: Story = {
  args: {
    iconName: 'search'
  }
}

export const Rating: Story = {
  args: {
    iconName: 'rating'
  }
}

export const Sort: Story = {
  args: {
    iconName: 'sort'
  }
}

export const Logo: Story = {
  args: {
    iconName: 'logo'
  }
}
