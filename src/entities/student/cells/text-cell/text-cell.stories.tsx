import {Meta, StoryObj} from '@storybook/react'
import {TextCell} from './text-cell.tsx'
import {TextCellProps} from './props.ts'

const meta = {
  title: 'Entities/Student/Text Cell',
  component: TextCell,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof TextCell>

export default meta

type Story = StoryObj<TextCellProps>

export const Example: Story = {
  args: {
    text: 'Прикладная информатика'
  }
}
