import {Meta, StoryObj} from '@storybook/react'
import {TypographyProps} from '../../typography/props.ts'
import {IconedButton} from './iconed-button.tsx'
import DeleteIcon from '../../../assets/icons/delete.svg?react'

const meta = {
  title: 'UI/Iconed Button',
  component: IconedButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
  },
  args: {

  }
} satisfies Meta<typeof IconedButton>

export default meta

type Story = StoryObj<TypographyProps>

export const DeleteIconedButton: Story = {
  args: {
    children: <DeleteIcon/>
  }
}
