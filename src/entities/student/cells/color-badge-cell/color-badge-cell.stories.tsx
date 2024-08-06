import {Meta, StoryObj} from '@storybook/react'
import {ColorBadgeCell} from './color-badge-cell.tsx'
import {ColorBadgeCellProps} from './props.ts'

const meta = {
  title: 'Entities/Student/Color Badge Cell',
  component: ColorBadgeCell,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof ColorBadgeCell>

export default meta

type Story = StoryObj<ColorBadgeCellProps>

export const Example: Story = {
  args: {
    colorBadgeProps: {
      color: 'blue'
    }
  }
}
