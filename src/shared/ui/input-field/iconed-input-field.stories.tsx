import {Meta, StoryObj} from '@storybook/react'
import {IconedInputField} from './iconed-input-field.tsx'
import {IconedInputFieldProps} from './props.ts'
import SearchIcon from '../../assets/icons/search.svg?react'

const meta = {
  title: 'UI/Iconed Input Field',
  component: IconedInputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof IconedInputField>

export default meta

type Story = StoryObj<IconedInputFieldProps>

export const Example: Story = {
  args: {
    inputFieldProps: {
      onChange: (e) => {
        console.log(e.target.value)
      },
      hint: 'Замещающий текст'
    },
    Icon: SearchIcon
  }
}
