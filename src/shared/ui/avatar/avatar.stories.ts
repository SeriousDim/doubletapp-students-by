import {Meta, StoryObj} from '@storybook/react'
import {Avatar} from './avatar.tsx'
import {AvatarProps} from './props.ts'
import PlaceholderImage from '../../assets/placeholders/square_image.jfif'

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'text'}
  },
  args: {

  }
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<AvatarProps>

export const StandartAvatar: Story = {
  args: {
    src: PlaceholderImage
  }
}

export const BiggerAvatar: Story = {
  args: {
    src: PlaceholderImage,
    width: '120px'
  }
}
