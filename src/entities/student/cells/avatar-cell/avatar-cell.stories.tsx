import {Meta, StoryObj} from '@storybook/react'
import {AvatarCell} from './avatar-cell.tsx'
import {AvatarCellProps} from './props.ts'

import PlaceholderImage from '../../../../shared/assets/placeholders/square_image.jfif'

const meta = {
  title: 'Entities/Student/Avatar Cell',
  component: AvatarCell,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    avatarProps: {
      src: PlaceholderImage
    }
  }
} satisfies Meta<typeof AvatarCell>

export default meta

type Story = StoryObj<AvatarCellProps>

export const Example: Story = {

}
