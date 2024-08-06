import {Meta, StoryObj} from '@storybook/react'
import {ActionsCell} from './actions-cell.tsx'
import {ActionCellProps} from './props.ts'
import DeleteIcon from '../../../../shared/assets/icons/delete.svg?react'

const meta = {
  title: 'Entities/Student/Actions Cell',
  component: ActionsCell,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof ActionsCell>

export default meta

type Story = StoryObj<ActionCellProps>

export const OneItem: Story = {
  args: {
    actions: [
      {children: <DeleteIcon/>},
    ]
  }
}

export const ManyItems: Story = {
  args: {
    actions: [
      {children: <DeleteIcon/>},
      {children: <DeleteIcon/>},
      {children: <DeleteIcon/>},
    ]
  }
}
