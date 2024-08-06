import {Meta, StoryObj} from '@storybook/react'
import {InputField} from './input-field.tsx'
import {InputFieldProps} from './props.ts'

const meta = {
  title: 'UI/Input Field',
  component: InputField,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    hint: 'Замещающий текст'
  }
} satisfies Meta<typeof InputField>

export default meta

type Story = StoryObj<InputFieldProps>

export const Placeholder: Story = {
  args: {

  }
}

export const Value: Story = {
  args: {
    value: 'Значение поставлено'
  }
}

export const ChangeListener: Story = {
  args: {
    onChange: (e) => console.log(e.target.value)
  }
}

export const SmallWidth: Story = {
  args: {
    styles: {
      width: '100px'
    }
  }
}
