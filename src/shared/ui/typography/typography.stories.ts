import {Typography} from './typography.tsx'
import {Meta, StoryObj} from '@storybook/react'
import {TypographyProps} from './props.ts'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'text' },
    lineHeight: { control: 'text' },
    headingLevel: {
      control: 'select',
      options: [undefined, 1]
    }
  },
  args: {
    headingLevel: undefined
  }
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<TypographyProps>

export const Heading1: Story = {
  args: {
    headingLevel: 1,
    children: 'Студенты'
  }
}

export const RegularText: Story = {
  args: {
    name: '16 / R',
    children: 'Обычный текст'
  }
}
