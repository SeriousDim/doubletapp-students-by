import {Meta, StoryObj} from '@storybook/react'
import {TypographyProps} from '../../typography/props.ts'
import {IconedButton} from './iconed-button.tsx'

const meta = {
  title: 'UI/Iconed Button',
  component: IconedButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'text' },
  },
  args: {
    iconName: 'delete'
  }
} satisfies Meta<typeof IconedButton>

export default meta

type Story = StoryObj<TypographyProps>

export const DeleteIconedButton: Story = {
  args: {

  }
}
